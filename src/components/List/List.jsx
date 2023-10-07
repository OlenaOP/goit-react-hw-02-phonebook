export const List = ({ title, contacts }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </>
  );
};
