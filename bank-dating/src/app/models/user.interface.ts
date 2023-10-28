export interface User {
  userId: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  sex: string;
  city: string;
}

this.user = {
  userId: '1',
  firstname: 'Esra',
  lastname: 'Doerksen',
  birthdate: new Date('2002-08-05'),
  city: 'Basel',
  sex: 'Männlich',
} as User;
