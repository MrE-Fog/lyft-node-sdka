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
import RideTypeEnum from './RideTypeEnum';





/**
* The CostEstimate model module.
* @module model/CostEstimate
* @version 1.0.0
*/
export default class CostEstimate {
    /**
    * Constructs a new <code>CostEstimate</code>.
    * A non-guaranteed estimate of price
    * @alias module:model/CostEstimate
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CostEstimate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CostEstimate} obj Optional instance to populate.
    * @return {module:model/CostEstimate} The populated <code>CostEstimate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CostEstimate();

            
            
            

            if (data.hasOwnProperty('ride_type')) {
                obj['ride_type'] = RideTypeEnum.constructFromObject(data['ride_type']);
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('estimated_cost_cents_min')) {
                obj['estimated_cost_cents_min'] = ApiClient.convertToType(data['estimated_cost_cents_min'], 'Number');
            }
            if (data.hasOwnProperty('estimated_cost_cents_max')) {
                obj['estimated_cost_cents_max'] = ApiClient.convertToType(data['estimated_cost_cents_max'], 'Number');
            }
            if (data.hasOwnProperty('estimated_distance_miles')) {
                obj['estimated_distance_miles'] = ApiClient.convertToType(data['estimated_distance_miles'], 'Number');
            }
            if (data.hasOwnProperty('estimated_duration_seconds')) {
                obj['estimated_duration_seconds'] = ApiClient.convertToType(data['estimated_duration_seconds'], 'Number');
            }
            if (data.hasOwnProperty('is_valid_estimate')) {
                obj['is_valid_estimate'] = ApiClient.convertToType(data['is_valid_estimate'], 'Boolean');
            }
            if (data.hasOwnProperty('primetime_percentage')) {
                obj['primetime_percentage'] = ApiClient.convertToType(data['primetime_percentage'], 'String');
            }
            if (data.hasOwnProperty('primetime_confirmation_token')) {
                obj['primetime_confirmation_token'] = ApiClient.convertToType(data['primetime_confirmation_token'], 'String');
            }
            if (data.hasOwnProperty('cost_token')) {
                obj['cost_token'] = ApiClient.convertToType(data['cost_token'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/RideTypeEnum} ride_type
    */
    ride_type = undefined;
    /**
    * A human readable description of the ride type
    * @member {String} display_name
    */
    display_name = undefined;
    /**
    * The ISO 4217 currency code for the amount (e.g. 'USD')
    * @member {String} currency
    */
    currency = undefined;
    /**
    * Estimated lower bound for trip cost, in minor units (cents). Estimates are not guaranteed, and only provide a reasonable range based on current conditions. 
    * @member {Number} estimated_cost_cents_min
    */
    estimated_cost_cents_min = undefined;
    /**
    * Estimated upper bound for trip cost, in minor units (cents). Estimates are not guaranteed, and only provide a reasonable range based on current conditions. 
    * @member {Number} estimated_cost_cents_max
    */
    estimated_cost_cents_max = undefined;
    /**
    * Estimated distance for this trip 
    * @member {Number} estimated_distance_miles
    */
    estimated_distance_miles = undefined;
    /**
    * Estimated time to get from the start location to the end. 
    * @member {Number} estimated_duration_seconds
    */
    estimated_duration_seconds = undefined;
    /**
    * The validity of the cost estimate returned
    * @member {Boolean} is_valid_estimate
    */
    is_valid_estimate = undefined;
    /**
    * Current Prime Time Percentage. Prime Time adds a percentage to ride costs, prior to other applicable fees. When ride requests greatly outnumber available drivers, our system will automatically turn on Prime Time. If Prime Time is inactive, the value returned will be '0%'. Note: The returned estimate already has Prime Time factored in. The value is returned here for reference and to allow users to confirm/accept Prime Time prior to initiating a ride. 
    * @member {String} primetime_percentage
    */
    primetime_percentage = undefined;
    /**
    * This token is needed when requesting rides. (Deprecated)
    * @member {String} primetime_confirmation_token
    */
    primetime_confirmation_token = undefined;
    /**
    * A token that confirms the user has accepted current Prime Time and/or fixed price charges. See 'Request a Lyft' for more details
    * @member {String} cost_token
    */
    cost_token = undefined;








}


