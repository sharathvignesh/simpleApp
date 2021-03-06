var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('API', function() {
  let server = "http://localhost:3000"
      it('/api', function(done) {
        chai.request(server)
          .get('/api')
          .end(function(err, res){
            res.should.have.status(200);
            res.text.should.be.eql('Welcome to the Todos API!');
            done();
          });
      });

      it('/api get_token', function(done) {
        chai.request(server)
          .get('/api/token')
          .set('Authorization', 'Bearer sharath123')
          .end(function(err, res){
            res.should.have.status(200);
            res.text.should.be.eql('Authorized');
            done();
          });
      });

      it('/API querystring', function(done) {
        let queryStr = "LoremIpsum"
        chai.request(server)
          .get('/api/q?id='+queryStr)
          .set('Authorization', 'Bearer sharath123')
          .end(function(err, res){
            res.should.have.status(200);
            res.text.should.be.eql(queryStr);
            done();
          });
      });

      it('/POST save_token', function(done) {
        chai.request(server)
          .post('/api/token')
          .set('content-type', 'application/json')
          .send({token_id: 'qWadbj12312mnjahsdka8793cHadshjasdAiepqwK'})
          .end(function(err, res){
            res.should.have.status(201);
            done();
          });
      });

      it('/API signin', function(done) {
        chai.request(server)
          .post('/api/signin')
          .set('content-type', 'application/json')
          .set('Authorization', 'Bearer sharath123')
          .send({username: 'username', password: 'password'})
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });

    });
