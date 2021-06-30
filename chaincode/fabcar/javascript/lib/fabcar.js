'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedger(ctx) {
        
    }

    async getDoc(ctx, doc_id) {
        const docAsBytes = await ctx.stub.getState(doc_id); // get the doc from chaincode state
        if (!docAsBytes || docAsBytes.length === 0) {
            throw new Error(`${doc_id} does not exist`);
        }
        console.log(docAsBytes.toString());
        return docAsBytes.toString();
    }

    /**
     * 
     * @param {*} ctx 
     * @param {document id} doc_id 
     * @param {HSC,BSC} doc_title 
     * @param {Student Name} doc_owner 
     * @param {Student ID} owner_id 
     * @param {Document Issuer Organigation} org_name 
     * @param {Document Issue Year} year 
     * @param {Student Group} group 
     * @param {GPA} gpa 
     * @param {GPA Scale} gpa_scale 
     */
    //
    async createDoc(ctx,doc_id,doc_title,doc_owner,owner_id,org_name,year,group,gpa,gpa_scale) {
        
        const doc = {
            doc_id,
            doc_title,doc_owner,owner_id,org_name,year,group,gpa,gpa_scale
        };

        await ctx.stub.putState(doc_id, Buffer.from(JSON.stringify(doc)));
        console.info('document issued successfully');
    }

}

module.exports = FabCar;
