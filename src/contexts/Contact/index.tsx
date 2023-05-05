import { createContext, useCallback, useContext, useState } from "react";
import { IContactsContext, IAuthProvider } from "../../interface/contexts";
import { Api } from "../../services";
import { ICreateContactsUser, IContactsUser } from "../../interface/Contacts";
import { AxiosResponse } from "axios";

const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const useContacts = () => {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error("useContacts must be used within an ContactProvider");
  }

  return context;
};

const ContactProvider = ({ children }: IAuthProvider) => {
  const [contacts, setContacts] = useState<IContactsUser[]>([]);

  const loadContacts = useCallback(async (userId: string, token: string) => {
    try {
      const res = await Api.get(`/contacts/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res.data;

      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createContacts = useCallback(
    async (body: ICreateContactsUser, token: string) => {
      await Api.post("/contacts", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res: AxiosResponse<IContactsUser>) =>
          setContacts((oldContacts) => [...oldContacts, res.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

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
    async (contactId: string, body: ICreateContactsUser, token: string) => {
      await Api.patch(`/contacts/${contactId}`, body, {
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
        contacts,
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
