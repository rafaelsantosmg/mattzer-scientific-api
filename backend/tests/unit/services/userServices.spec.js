const { expect } = require("chai");
const sinon = require('sinon');
const UserService = require('../../../src/services/userServices');
const LoginService = require('../../../src/services/loginServices');
const { User } = require('../../../src/database/models');
const mocks = require('../mocks/mocks');

describe('Service - Rota "/users"', () => {
  describe('Valida a função create', () => {
    before(() => {
      sinon.stub(User, 'create').resolves(mocks.createUserResolves);
      sinon.stub(User, 'findOne').resolves(mocks.findUser);
    })
  
    after(() => {
      User.create.restore();
      User.findOne.restore();
    })
  
    it('Valida se nome ja existe', async () => {
      try {
        await UserService.create(mocks.createUserResolves);
      } catch (error) {
        expect(error.message).to.be.equals('Conflict');
      }
    });
  });
});