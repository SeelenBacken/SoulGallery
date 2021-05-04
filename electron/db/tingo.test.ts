import {describe} from 'mocha';
import {expect} from 'chai';
import { TingoDB } from './tingo';

describe('Database Tests', () => {
  it('Should init and work', () => {
    let db = new TingoDB();
    console.log(db.getOne())
  })
})
