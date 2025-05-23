/* tslint:disable */
/* eslint-disable */
/**
 * Pathos
 * Pathos의 API 명세서입니다.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyticsDto
 */
export interface AnalyticsDto {
    /**
     * epoch 목록
     * @type {Array<number>}
     * @memberof AnalyticsDto
     */
    epochs?: Array<number>;
    /**
     * epoch별 loss 값
     * @type {Array<number>}
     * @memberof AnalyticsDto
     */
    loss?: Array<number>;
    /**
     * epoch별 IoU 값
     * @type {Array<number>}
     * @memberof AnalyticsDto
     */
    iou?: Array<number>;
    /**
     * f1 점수
     * @type {number}
     * @memberof AnalyticsDto
     */
    f1Score?: number;
}

/**
 * Check if a given object implements the AnalyticsDto interface.
 */
export function instanceOfAnalyticsDto(value: object): value is AnalyticsDto {
    return true;
}

export function AnalyticsDtoFromJSON(json: any): AnalyticsDto {
    return AnalyticsDtoFromJSONTyped(json, false);
}

export function AnalyticsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'epochs': json['epochs'] == null ? undefined : json['epochs'],
        'loss': json['loss'] == null ? undefined : json['loss'],
        'iou': json['iou'] == null ? undefined : json['iou'],
        'f1Score': json['f1Score'] == null ? undefined : json['f1Score'],
    };
}

export function AnalyticsDtoToJSON(json: any): AnalyticsDto {
    return AnalyticsDtoToJSONTyped(json, false);
}

export function AnalyticsDtoToJSONTyped(value?: AnalyticsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'epochs': value['epochs'],
        'loss': value['loss'],
        'iou': value['iou'],
        'f1Score': value['f1Score'],
    };
}

