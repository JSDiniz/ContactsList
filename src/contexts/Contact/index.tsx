import { useAuth } from "../Auth";
import { Api } from "../../services";
import { AxiosResponse } from "axios";
import { IContactsUser } from "../../interface/Contacts";
import { IContact } from "../../components/CreateContacts";
import { IEditContact } from "../../components/EditContact";
import { createContext, useCallback, useContext } from "react";
import { IContactsContext, IAuthProvider } from "../../interface/contexts";
import { IPhones } from "../../interface/Phones";
import { IEmails } from "../../interface/Emails";

const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const useContacts = () => {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error("useContacts must be used within an ContactProvider");
  }

  return context;
};

const ContactProvider = ({ children }: IAuthProvider) => {
  const { user, contacts, setContacts, setContactsCopy } = useAuth();

  const loadContacts = useCallback(async (userId: string, token: string) => {
    try {
      const res = await Api.get(`/contacts/${userId}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;

      setContacts(data);
      setContactsCopy(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createContacts = useCallback(async (body: IContact, token: string) => {
    await Api.post("/contacts", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res: AxiosResponse<IContactsUser>) =>
        setContacts((oldContacts) => [...oldContacts, res.data])
      )
      .catch((err) => console.log(err));
  }, []);

  const deleteContacts = useCallback(
    async (contactId: string, token: string) => {
      await Api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((_) => {
          const filterContact = contacts.filter(
            (contact) => contact.id !== contactId
          );
          setContacts(filterContact);
        })
        .catch((err) => console.log(err));
    },
    [contacts]
  );

  const updateContact = useCallback(
    async (contactId: string, body: IEditContact, token: string) => {
      await Api.patch(`/contacts/${contactId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((_) => {
          loadContacts(user.id, token);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const createPhone = useCallback(
    async (contacId: string, body: IPhones[], token: string) => {
      await Api.post(`/phones/${contacId}/contact`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((_) => {
          loadContacts(user.id, token);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const deletePhone = useCallback(async (phonesId: string, token: string) => {
    await Api.delete(`/phones/${phonesId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => {})
      .catch((err) => console.log(err));
  }, []);

  const createEmail = useCallback(
    async (contacId: string, body: IEmails[], token: string) => {
      await Api.post(`/emails/${contacId}/contact`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((_) => {
          loadContacts(user.id, token);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const deleteEmail = useCallback(async (emailId: string, token: string) => {
    await Api.delete(`/emails/${emailId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => {})
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContactsContext.Provider
      value={{
        createContacts,
        loadContacts,
        deleteContacts,
        updateContact,
        createPhone,
        deletePhone,
        createEmail,
        deleteEmail,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { useContacts, ContactProvider };
