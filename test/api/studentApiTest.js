
import chai from 'chai';
import request from 'supertest';
import {connect, close} from '../../db.js';
import studentRoutes from '../../routes/studentRoutes.js';
const expect=chai.expect;
describe('Student Connection',()=>{
    before((done)=>{
connect().then(()=>done()).catch((err)=>done(err));
    });
    after((done)=>{
        close().then(()=>done()).catch((err)=>done(err));
            })
});

it('Success! Save Student Record', async () => {
    const result = await request('https://students-api-netsol.herokuapp.com',studentRoutes).post('/una/student').
    send({name: '7PM Saturday TESTING', email: 'khalid.599@gmail.com'});
    const body=result.body;
    expect(body).to.contain.property('name');
    expect(body).to.contain.property('email');
  });
  it('Fail Case! Student name and email in not valid', async () => {
    const result = await request('https://students-api-netsol.herokuapp.com',studentRoutes).post('/una/student').send({name: 'NG', email: 'khalid.59gmail.com'});
    expect(result.body).to.contain.property('errors');
  });
  it('Success: Get Students Record', async () => {
    const result = await request('https://students-api-netsol.herokuapp.com',studentRoutes).get('/una/students');
    expect(result.statusCode).to.equal(200);
  });
  it('Success: Get Single Student Record', async () => {
    const result = await request('https://students-api-netsol.herokuapp.com',studentRoutes).get('/una/students/610e315881047d3e037b139f');
    expect(result.statusCode).to.equal(200);
  });
  it('Success! Update Students Record', async () => {
    const result = await request('https://students-api-netsol.herokuapp.com',studentRoutes).put('/una/student/610e8fe0859bea002288c6c8').send({name: 'Asif Ali Zardari', email: 'Zardari@gmail.com'});
    expect(result.statusCode).to.equal(200);
  });
  it('Success! Delete Students Record', async () => {
    const result = await request('https://students-api-netsol.herokuapp.com',studentRoutes).delete('/una/student/610e8e7a859bea002288c6c4');
    expect(result.statusCode).to.equal(200);
  });
