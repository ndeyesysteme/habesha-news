'use strict';

const expect = require('chai').expect;
const mongoose = require('mongoose');

const commentConfig = require('./comment-config');

const data = require('../../config/data');

describe('Comment Validation Test', () => {

    let body;

    const article = new mongoose.mongo.ObjectId();
    const poster = new mongoose.mongo.ObjectId();

    it('Should fail if there is nothing provided', () => {
        return commentConfig.create('', '', '').then(res => {
            body = res.body;

            expect(res.status).to.equal(400);
            expect(body).to.have.property('error').equal(true);
            expect(body).to.have.property('message').contains('provided');
            expect(body).to.have.property('status').equal(400);
        });
    });

    it('Should fail if message is missing', () => {
        return commentConfig.create('', '', '').then(res => {
            body = res.body;

            expect(res.status).to.equal(400);
            expect(body).to.have.property('error').equal(true);
            expect(body).to.have.property('message').contains('provided');
            expect(body).to.have.property('message').contains('message');
            expect(body).to.have.property('status').equal(400);
        });
    });

    it('Should fail if article is missing', () => {
        return commentConfig.create(poster, '').then(res => {
            body = res.body;

            expect(res.status).to.equal(400);
            expect(body).to.have.property('error').equal(true);
            expect(body).to.have.property('message').contains('provided');
            expect(body).to.have.property('message').contains('article');
            expect(body).to.have.property('status').equal(400);
        });
    });

    it('Should fail if poster is missing', () => {
        return commentConfig.create('', article).then(res => {
            body = res.body;

            expect(res.status).to.equal(400);
            expect(body).to.have.property('error').equal(true);
            expect(body).to.have.property('message').contains('provided');
            expect(body).to.have.property('message').contains('poster');
            expect(body).to.have.property('status').equal(400);
        });
    });
});
