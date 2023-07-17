const searchFunction = (contacts, search) => {
  if (!Array.isArray(contacts) || contacts.length === 0 || !search) {
    return [];
  }

  const searchName = search.toLowerCase().trim();

  return contacts.filter(contact => {
    const contactName = contact.name ? contact.name.toLowerCase().trim() : '';
    const contactNumber = contact.phone ? contact.phone.trim() : '';

    return (
      contactName.includes(searchName) || contactNumber.includes(searchName)
    );
  });
};

export default searchFunction;
