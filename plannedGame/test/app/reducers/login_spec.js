import loginReducer from '../../../app/reducers/login';

describe('loginReducer', () => {
  it('returns initial state', () => {
    const state = loginReducer(undefined, {});
    expect(state.username).to.equal('');
    expect(state.password).to.equal('');
  });
});
