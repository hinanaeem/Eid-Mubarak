function eidMubarakMessages(names: string[]): string[] {
  const messages: string[] = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(
      `Eid Mubarak, ${names[i]}! May this blessed occasion of Eid -ul- Adha bring you and your loved ones peace, happiness, and prosperity.May the joy and blessings of this Holy festival fill your heart and home. Wishing you a wonderful Eid celebration!`
    );
  }
  return messages;
}
// Teachers and Friends
const names = [
    "Sir Ameen Alam",
    "Sir zia",
    "sir Bilal",
    "Sir Fahad",
    "sir Hamza",
    " ALL MY CLASSMATES AND LINKEDIN FRIENDS",
];
const messages = eidMubarakMessages(names);
console.log(messages); // From Hina Naeem

