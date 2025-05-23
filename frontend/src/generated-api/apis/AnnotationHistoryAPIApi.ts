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


import * as runtime from '../runtime';
import type {
  AnnotationHistoryResponseDto,
} from '../models/index';
import {
    AnnotationHistoryResponseDtoFromJSON,
    AnnotationHistoryResponseDtoToJSON,
} from '../models/index';

export interface GetAnnotationHistoryRequest {
    annotationHistoryId: number;
}

/**
 * 
 */
export class AnnotationHistoryAPIApi extends runtime.BaseAPI {

    /**
     * 특정 Annotation History의 상세 정보를 조회합니다.
     * Annotation History 상세 조회
     */
    async getAnnotationHistoryRaw(requestParameters: GetAnnotationHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnnotationHistoryResponseDto>> {
        if (requestParameters['annotationHistoryId'] == null) {
            throw new runtime.RequiredError(
                'annotationHistoryId',
                'Required parameter "annotationHistoryId" was null or undefined when calling getAnnotationHistory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/annotation-histories/{annotationHistoryId}`.replace(`{${"annotationHistoryId"}}`, encodeURIComponent(String(requestParameters['annotationHistoryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnnotationHistoryResponseDtoFromJSON(jsonValue));
    }

    /**
     * 특정 Annotation History의 상세 정보를 조회합니다.
     * Annotation History 상세 조회
     */
    async getAnnotationHistory(requestParameters: GetAnnotationHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnnotationHistoryResponseDto> {
        const response = await this.getAnnotationHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
