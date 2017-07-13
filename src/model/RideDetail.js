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
import DriverDetail from './DriverDetail';
import LineItem from './LineItem';
import PassengerDetail from './PassengerDetail';
import RideStatusEnum from './RideStatusEnum';
import RideTypeEnumWithOther from './RideTypeEnumWithOther';
import VehicleDetail from './VehicleDetail';





/**
* The RideDetail model module.
* @module model/RideDetail
* @version 1.0.0
*/
export default class RideDetail {
    /**
    * Constructs a new <code>RideDetail</code>.
    * Detail information about a ride
    * @alias module:model/RideDetail
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RideDetail</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RideDetail} obj Optional instance to populate.
    * @return {module:model/RideDetail} The populated <code>RideDetail</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RideDetail();

            
            
            

            if (data.hasOwnProperty('ride_id')) {
                obj['ride_id'] = ApiClient.convertToType(data['ride_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = RideStatusEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('ride_type')) {
                obj['ride_type'] = RideTypeEnumWithOther.constructFromObject(data['ride_type']);
            }
            if (data.hasOwnProperty('passenger')) {
                obj['passenger'] = PassengerDetail.constructFromObject(data['passenger']);
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = DriverDetail.constructFromObject(data['driver']);
            }
            if (data.hasOwnProperty('vehicle')) {
                obj['vehicle'] = VehicleDetail.constructFromObject(data['vehicle']);
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], Object);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], Object);
            }
            if (data.hasOwnProperty('pickup')) {
                obj['pickup'] = ApiClient.convertToType(data['pickup'], Object);
            }
            if (data.hasOwnProperty('dropoff')) {
                obj['dropoff'] = ApiClient.convertToType(data['dropoff'], Object);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], Object);
            }
            if (data.hasOwnProperty('primetime_percentage')) {
                obj['primetime_percentage'] = ApiClient.convertToType(data['primetime_percentage'], 'String');
            }
            if (data.hasOwnProperty('distance_miles')) {
                obj['distance_miles'] = ApiClient.convertToType(data['distance_miles'], 'Number');
            }
            if (data.hasOwnProperty('duration_seconds')) {
                obj['duration_seconds'] = ApiClient.convertToType(data['duration_seconds'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], Object);
            }
            if (data.hasOwnProperty('line_items')) {
                obj['line_items'] = ApiClient.convertToType(data['line_items'], [LineItem]);
            }
            if (data.hasOwnProperty('can_cancel')) {
                obj['can_cancel'] = ApiClient.convertToType(data['can_cancel'], ['String']);
            }
            if (data.hasOwnProperty('canceled_by')) {
                obj['canceled_by'] = ApiClient.convertToType(data['canceled_by'], 'String');
            }
            if (data.hasOwnProperty('cancellation_price')) {
                obj['cancellation_price'] = ApiClient.convertToType(data['cancellation_price'], Object);
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('feedback')) {
                obj['feedback'] = ApiClient.convertToType(data['feedback'], 'String');
            }
            if (data.hasOwnProperty('pricing_details_url')) {
                obj['pricing_details_url'] = ApiClient.convertToType(data['pricing_details_url'], 'String');
            }
            if (data.hasOwnProperty('route_url')) {
                obj['route_url'] = ApiClient.convertToType(data['route_url'], 'String');
            }
            if (data.hasOwnProperty('requested_at')) {
                obj['requested_at'] = ApiClient.convertToType(data['requested_at'], 'Date');
            }
            if (data.hasOwnProperty('generated_at')) {
                obj['generated_at'] = ApiClient.convertToType(data['generated_at'], 'Date');
            }
            if (data.hasOwnProperty('ride_profile')) {
                obj['ride_profile'] = ApiClient.convertToType(data['ride_profile'], Object);
            }
            if (data.hasOwnProperty('beacon_color')) {
                obj['beacon_color'] = ApiClient.convertToType(data['beacon_color'], 'String');
            }
        }
        return obj;
    }

    /**
    * The unique ID of this ride
    * @member {String} ride_id
    */
    ride_id = undefined;
    /**
    * @member {module:model/RideStatusEnum} status
    */
    status = undefined;
    /**
    * @member {module:model/RideTypeEnumWithOther} ride_type
    */
    ride_type = undefined;
    /**
    * @member {module:model/PassengerDetail} passenger
    */
    passenger = undefined;
    /**
    * @member {module:model/DriverDetail} driver
    */
    driver = undefined;
    /**
    * @member {module:model/VehicleDetail} vehicle
    */
    vehicle = undefined;
    /**
    * The *requested* location for passenger pickup
    * @member {Object} origin
    */
    origin = undefined;
    /**
    * The *requested* location for passenger drop off
    * @member {Object} destination
    */
    destination = undefined;
    /**
    * The *actual* location of passenger pickup
    * @member {Object} pickup
    */
    pickup = undefined;
    /**
    * The *actual* location of passenger drop off
    * @member {Object} dropoff
    */
    dropoff = undefined;
    /**
    * The *current* location info of the ride
    * @member {Object} location
    */
    location = undefined;
    /**
    * The Prime Time percentage applied to the base price
    * @member {String} primetime_percentage
    */
    primetime_percentage = undefined;
    /**
    * The distance, in miles, that this ride traveled. This field is only present after drop-off
    * @member {Number} distance_miles
    */
    distance_miles = undefined;
    /**
    * Duration of the ride in seconds from pickup to drop-off. This field is only present after drop-off.
    * @member {Number} duration_seconds
    */
    duration_seconds = undefined;
    /**
    * The total price for the current ride
    * @member {Object} price
    */
    price = undefined;
    /**
    * The break down of cost
    * @member {Array.<module:model/LineItem>} line_items
    */
    line_items = undefined;
    /**
    * @member {Array.<module:model/RideDetail.CanCancelEnum>} can_cancel
    */
    can_cancel = undefined;
    /**
    * The role of user who canceled the ride (if applicable)
    * @member {String} canceled_by
    */
    canceled_by = undefined;
    /**
    * The cost of cancellation if there would be a penalty
    * @member {Object} cancellation_price
    */
    cancellation_price = undefined;
    /**
    * The rating the user left for this ride, from 1 to 5
    * @member {Number} rating
    */
    rating = undefined;
    /**
    * The written feedback the user left for this ride
    * @member {String} feedback
    */
    feedback = undefined;
    /**
    * The web view showing the pricing structure for the geographic area where the ride was taken 
    * @member {String} pricing_details_url
    */
    pricing_details_url = undefined;
    /**
    * The web view showing the passenger, driver, and route for this ride. This field will only be present for rides created through this API, or that have been shared through the \"Share my Route\" feature 
    * @member {String} route_url
    */
    route_url = undefined;
    /**
    * The ride requested timestamp in date and time
    * @member {Date} requested_at
    */
    requested_at = undefined;
    /**
    * The request timestamp in date and time
    * @member {Date} generated_at
    */
    generated_at = undefined;
    /**
    * Indicates whether the ride was requested from the business profile or personal profile of the user. 
    * @member {Object} ride_profile
    */
    ride_profile = undefined;
    /**
    * Hex color code of the driver AMP device.
    * @member {String} beacon_color
    */
    beacon_color = undefined;






    /**
    * Allowed values for the <code>canCancel</code> property.
    * @enum {String}
    * @readonly
    */
    static CanCancelEnum = {
    
        /**
         * value: "driver"
         * @const
         */
        "driver": "driver",
    
        /**
         * value: "passenger"
         * @const
         */
        "passenger": "passenger",
    
        /**
         * value: "dispatcher"
         * @const
         */
        "dispatcher": "dispatcher"    
    };



}


