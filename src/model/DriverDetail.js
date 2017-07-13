/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The DriverDetail model module.
* @module model/DriverDetail
* @version 1.0.0
*/
export default class DriverDetail {
    /**
    * Constructs a new <code>DriverDetail</code>.
    * @alias module:model/DriverDetail
    * @class
    * @param firstName {String} The driver's first name
    * @param phoneNumber {String} The driver's contact phone number. Must be E.164 formatted. 
    * @param rating {String} The driver's rating based in 0-5 scale
    * @param imageUrl {String} The driver's image url
    * @param userId {String} The driver's id
    */

    constructor(firstName, phoneNumber, rating, imageUrl, userId) {
        

        
        

        this['first_name'] = firstName;this['phone_number'] = phoneNumber;this['rating'] = rating;this['image_url'] = imageUrl;this['user_id'] = userId;

        
    }

    /**
    * Constructs a <code>DriverDetail</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DriverDetail} obj Optional instance to populate.
    * @return {module:model/DriverDetail} The populated <code>DriverDetail</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DriverDetail();

            
            
            

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The driver's first name
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * The driver's contact phone number. Must be E.164 formatted. 
    * @member {String} phone_number
    */
    phone_number = undefined;
    /**
    * The driver's rating based in 0-5 scale
    * @member {String} rating
    */
    rating = undefined;
    /**
    * The driver's image url
    * @member {String} image_url
    */
    image_url = undefined;
    /**
    * The driver's id
    * @member {String} user_id
    */
    user_id = undefined;








}


