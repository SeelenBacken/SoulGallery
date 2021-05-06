import { describe } from 'mocha';
import { expect } from 'chai';
import {AppComponent} from './app.component';

describe('App Component', () => {
  it('should be created', () => {
    const app = new AppComponent();
    expect(app).to.exist;
  });
});
