const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing  routes", function(err){
  // it("should handle the request", function(done){
  //   url
  //       .get("/")
  //       .expect(200)
  //       .end(function(err,res){
  //         if (err) {
		// 		        throw err;
		// 	    }
  //         res.text.should.equal("Hello from Express",res.text, "response text is not matching with test string!");
  //         done();
  //       });
  // });

  // });

  it("Adding favourite restaurant", function(done){
    url
        .post("/restaurant/addRestaurant")
        .send({ "resId": "1", "resName": "abc", "resComment":"Comment" })
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          (res.text).should.not.equal("Invalid Description","Invalid Description");
          (res.text).should.not.equal("Invalid Name","Invalid Name");

        (res.text).should.equal("AddedSucessfully","Expected value not matching with response");
        done();
        });

 });

    it("Reading the  restaurant", function(done){
    url
        .post("/restaurant/getRestaurant")
        .send("")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
         

        (res.text).should.equal("Read Sucessfully","Expected value not matching with response");
        done();
        });

 });


  it("Delete restaurant", function(done){
    url
        .post("/restaurant/deleteRestaurant")
        .send({ "resId": "1" })
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          (res.text).should.not.equal("Invalid Id","Id should be a number");
        (res.text).should.equal("DeletedSucessfully","Expected value not matching with response");
          done();
        });

 });

   it("Updated restaurants restaurant", function(done){
    url
        .post("/restaurant/updateRestaurant")
        .send({ "resId": "1", "resComment":"Comment"})
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          (res.text).should.not.equal("Invalid Id","Id should be a number");
        (res.text).should.equal("UpdatedSucessfully","Expected value not matching with response");
          done();
        });

 });
});