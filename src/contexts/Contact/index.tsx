import { useAuth } from "../Auth";
import { Api } from "../../services";
import { AxiosResponse } from "axios";
import { IContactsUser } from "../../interface/Contacts";
import { IContact } from "../../components/CreateContacts";
import { IEditContact } from "../../components/EditContact";
import { createContext, useCallback, useContext } from "react";
import { IContactsContext, IAuthProvider } from "../../interface/contexts";

const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const useContacts = () => {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error("useContacts must be used within an ContactProvider");
  }

  return context;
};

const ContactProvider = ({ children }: IAuthProvider) => {
  const { contacts, setContacts } = useAuth();

  const loadContacts = useCallback(async (userId: string, token: string) => {
    try {
      const res = await Api.get(`/contacts/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;

      setContacts(data);
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
    async (body: IEditContact, token: string) => {
      await Api.patch(`/contacts/${body.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          loadContacts(res.data.users.id, token);
        })
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <ContactsContext.Provider
      value={{
        createContacts,
        loadContacts,
        deleteContacts,
        updateContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { useContacts, ContactProvider };
