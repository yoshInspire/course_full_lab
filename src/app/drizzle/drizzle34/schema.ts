export function getStudents(): { name: string }[] {
  return [
    { name: "Ivan" },
    { name: "Anna" },
  ];
}

export function getStudentsNames(
  loadStudents: () => { name: string }[] = getStudents,
) {
  return loadStudents().map((student) => student.name);
}
