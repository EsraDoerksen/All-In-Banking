import * as moment from 'moment';
import {User} from '../models/user.interface';
import {Account} from '../models/account.interface';
import {Match} from '../models/match.interface';
import {matchReasonsEnum} from "../enums/match-reasons.enum";

export function formatDate(date: Date): string {
  return moment(date).format('DD.MM.YYYY');
}

export function getMatches(currentUser: User, currentAccount: Account, users: User[], accounts: Account[]): Match[] {
  let matches = [] as Match[];

  /*
  users.forEach((user) => {
    // filter sex
    if (user.sex !== currentUser.sex) {
      console.log("match added (sex)")
      matches.push({
        userId: user.userId,
        firstname: user.firstname,
        lastname: user.lastname,
        birthdate: user.birthdate,
        sex: user.sex,
        city: user.city,
        reason: matchReasonsEnum.sex,
      });
    }
  });
  */

  users.forEach((user) => {
    matches.push({
      userId: user.userId,
      firstname: user.firstname,
      lastname: user.lastname,
      birthdate: user.birthdate,
      sex: user.sex,
      city: user.city,
      reason: matchReasonsEnum.age + ' / ' + matchReasonsEnum.transactionLocation + ' / ' + matchReasonsEnum.transactionType,
    });
  });

  return matches as Match[];
}
