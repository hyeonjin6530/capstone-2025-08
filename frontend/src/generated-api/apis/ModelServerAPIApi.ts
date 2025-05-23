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
  TrainingRequestDto,
  TrainingResultRequestDto,
} from '../models/index';
import {
    TrainingRequestDtoFromJSON,
    TrainingRequestDtoToJSON,
    TrainingResultRequestDtoFromJSON,
    TrainingResultRequestDtoToJSON,
} from '../models/index';

export interface RequestTrainingRequest {
    projectId: number;
    trainingRequestDto: TrainingRequestDto;
}

export interface ResponseTrainingRequest {
    projectId: number;
    trainingResultRequestDto: TrainingResultRequestDto;
}

/**
 * 
 */
export class ModelServerAPIApi extends runtime.BaseAPI {

    /**
     * 클라이언트가 모델 서버에 학습을 요청합니다.
     * 모델 학습 요청
     */
    async requestTrainingRaw(requestParameters: RequestTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling requestTraining().'
            );
        }

        if (requestParameters['trainingRequestDto'] == null) {
            throw new runtime.RequiredError(
                'trainingRequestDto',
                'Required parameter "trainingRequestDto" was null or undefined when calling requestTraining().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/model-server/training/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrainingRequestDtoToJSON(requestParameters['trainingRequestDto']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 클라이언트가 모델 서버에 학습을 요청합니다.
     * 모델 학습 요청
     */
    async requestTraining(requestParameters: RequestTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.requestTrainingRaw(requestParameters, initOverrides);
    }

    /**
     * 모델 서버가 학습 결과를 서버에 전달합니다.
     * 모델 학습 결과 수신
     */
    async responseTrainingRaw(requestParameters: ResponseTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling responseTraining().'
            );
        }

        if (requestParameters['trainingResultRequestDto'] == null) {
            throw new runtime.RequiredError(
                'trainingResultRequestDto',
                'Required parameter "trainingResultRequestDto" was null or undefined when calling responseTraining().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/model-server/porjects/{projectId}/training/result`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrainingResultRequestDtoToJSON(requestParameters['trainingResultRequestDto']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 모델 서버가 학습 결과를 서버에 전달합니다.
     * 모델 학습 결과 수신
     */
    async responseTraining(requestParameters: ResponseTrainingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.responseTrainingRaw(requestParameters, initOverrides);
    }

}
