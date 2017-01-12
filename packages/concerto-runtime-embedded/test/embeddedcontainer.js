/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

const Container = require('@ibm/concerto-runtime').Container;
const DataService = require('@ibm/concerto-runtime').DataService;
const LoggingService = require('@ibm/concerto-runtime').LoggingService;
const EmbeddedContainer = require('..').EmbeddedContainer;
const uuid = require('uuid');
const version = require('../package.json').version;

require('chai').should();
const sinon = require('sinon');

describe('EmbeddedContainer', () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('#constructor', () => {

        it('should construct a new container', () => {
            let container = new EmbeddedContainer();
            container.should.be.an.instanceOf(Container);
        });

    });

    describe('#getVersion', () => {

        it('should return the container version', () => {
            let container = new EmbeddedContainer();
            container.getVersion().should.equal(version);
        });

    });

    describe('#getDataService', () => {

        it('should return the container data service', () => {
            let container = new EmbeddedContainer();
            container.getDataService().should.be.an.instanceOf(DataService);
        });

    });

    describe('#getLoggingService', () => {

        it('should return the container logging service', () => {
            let container = new EmbeddedContainer();
            container.getLoggingService().should.be.an.instanceOf(LoggingService);
        });

    });

    describe('#getUUID', () => {

        it('should return the container UUID', () => {
            sandbox.stub(uuid, 'v4').returns('eaaf183b-7d22-4601-be96-833e2b342c7a');
            let container = new EmbeddedContainer();
            container.getUUID().should.equal('eaaf183b-7d22-4601-be96-833e2b342c7a');
        });

    });

});