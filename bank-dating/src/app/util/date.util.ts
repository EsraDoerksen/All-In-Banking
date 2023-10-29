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

  users.forEach((user) => {
    // filter sex
    if (user.sex !== currentUser.sex) {
      console.log("match added")
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

  // remove duplicates
  let results = [] as Match[]

  matches.forEach((match) => {
    results.forEach((result) => {
      if (result.userId !== match.userId) {

      };

      results.push(match);
    });
  });

  return results as Match[];
}
