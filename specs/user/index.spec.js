
import supertest from "supertest";
import config from '../config.js';


describe('POST /api/v1/login', () => {
  test('Регистрация пользователя', async () => {
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/doregister')
      .set('Accept', 'application/json')
      .send({ name: 'test007', email: 'aaa@gmail.com', password: 'test007' })
    expect(res.status).toEqual(200);
    
  })

})
describe('POST /api/v1/login', () => {
  test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/dologin')
      .set('Accept', 'application/json')
      .send({ email: 'aaa@gmail.com', password: 'test007' })
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ result: true })
  })

})

describe('POST /api/v1/login', () => {
  test('Получение информации о пользователе', async () => {
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/getuserfull')
      .set('Accept', 'application/json')
      .send({ email: 'aaa@gmail.com', password: 'test007' })
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('test007')
  })

})

describe('POST /api/v1/login', () => {
  test('Удаление пользователя', async () => {
    const res = await supertest(config.baseUrl)
      .post('/tasks/rest/deleteuser')
      .set('Accept', 'application/json')
      .send({ email: 'aaa@gmail.com', password: 'test007' })
    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual('Пользователь с таким email не найден')
  })

})