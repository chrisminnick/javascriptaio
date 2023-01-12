function CustomerList({ customers }) {
  return (
    <ul>
      {customers.map(customer, () => (
        <li key={customer.id}>
          {customer.name}, {customer.address}, {customer.city}, {customer.state}
        </li>
      ))}
    </ul>
  );
}
export default CustomerList;
