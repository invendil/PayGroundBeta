import React, { Component } from 'react';
import './styles.css';
import PropTypes  from 'prop-types';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { Progress, Rate, Tabs, Modal } from 'antd';
import getVideoId from '../../_utils/getVideoId';
import getLeftDays from '../../_utils/getLeftDays';

import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal/component';
import {Redirect} from "react-router-dom";
import RewardEditorModal from "./RewardEditorModal";
import RewardSection from "./RewardsSection";
import CommentContainer from "../TRASH/CommentsContainer"
import ReactHtmlParser from "react-html-parser";
import CommentsTab from "./CommentsTab/component";

const { confirm } = Modal;
const { TabPane } = Tabs;

class CampaignPage extends Component {


    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.getCampaign(id);
    }

    getRewardHandler = (reward) => {
        const {user, match} = this.props;
        const rewardData ={
            companyId : Number(match.params.id),
            userId : user.id,
            RewardId : reward.id
        };
        this.props.getReward(rewardData);
    }

    ratingChangeHandler = (ratingState) =>{
        const {user, match} = this.props;
        const rating ={
            companyId : Number(match.params.id),
            userId : user.id,
            state : ratingState
        };
        this.props.changeRatingState(rating)
    }

    render() {

        const { campaign, user, deleteCampaign, isLoading, error, isDeleted, match , isAuthorized} = this.props;
        const isUserCreator = campaign.user && user && user.id === campaign.user.id;

        console.log(campaign);

        return (
            <div>
                {error === 'Campaign doesnt exist' && <Redirect to="/404"/>}
                {isDeleted && <Redirect to="/"/>}
                <Container className="py-4">
                    <h1 className="text-center">{campaign.title}</h1>
                    <h3 className="text-center pb-4">
                        {campaign.category ? campaign.category.name : null}
                    </h3>
                    <Row>
                        <Col md={8}>
                            <Carousel
                                className="carousel"
                                interval={null}
                                controls={false}
                            >
                                <Carousel.Item>
                                    <YouTube
                                        videoId={
                                            campaign.urlVideo
                                                ? getVideoId(campaign.urlVideo)
                                                : null
                                        }
                                        opts={{
                                            height: '400',
                                            width: '100%',
                                        }}
                                    />
                                </Carousel.Item>
                                {campaign.images &&
                                    campaign.images.map((item, index) => (
                                        <Carousel.Item className="h-25" key={index}>
                                            <img
                                                alt="carousel image"
                                                className="carousel-image d-block w-100"
                                                src={item}
                                            />
                                        </Carousel.Item>
                                    ))}
                            </Carousel>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-between">
                                <Rate
                                    disabled={user.isAuthorized}
                                    onChange={this.ratingChangeHandler}

                                    defaultValue={campaign}
                                />
                                <span>{campaign.rating !== 0 ? parseFloat(campaign.rating).toFixed(1) : null}</span>
                            </div>
                            <Progress
                                className="py-2"
                                percent={
                                    (campaign.currentMoney / campaign.goalMoney) * 100
                                }
                                showInfo={false}
                            />
                            <span>${campaign.goalMoney}</span>
                            <p>pledged out of ${campaign.goalMoney} goal </p>
                            <span>30</span>
                            <p>backers</p>
                            <span>{getLeftDays(campaign.finishTime)}</span>
                            <p>days left</p>
                            <p className="">
                                Creator:{' '}
                                {campaign.user
                                    ? `${campaign.user.firstName} ${campaign.user.lastName}`
                                    : null}
                            </p>

                            {isUserCreator && (
                                <div className="d-flex justify-content-between mt-5">
                                    <Link
                                        to={`/companies/edit/${
                                            campaign.id ? campaign.id : null
                                        }`}
                                        className="btn btn-outline-success w-25"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteModal
                                        deleteCampaign={deleteCampaign}
                                        isLoading={isLoading}
                                        error={error}
                                        campaign={campaign}
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Tabs className="border-top pb-5" defaultActiveKey="1" size="large">
                        <TabPane tab="Campaign" key="1">
                            <Container>
                                <Row className="pt-3">
                                    <Col sm={8}>
                                        <h4 className="text-center">Description</h4>
                                        <p>
                                            { ReactHtmlParser(campaign.description) }
                                        </p>
                                    </Col>
                                    <Col sm={4}>
                                        <h4 className="text-center mb-3">
                                            Select reward
                                        </h4>
                                        {isUserCreator && (
                                            <RewardEditorModal id={Number(match.params.id)} isCreating="true"/>
                                        )}
                                        <RewardSection
                                            id={Number(match.params.id)}
                                            isUserCreator={isUserCreator}
                                            getRewardHandler = {this.getRewardHandler}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPane>
                        <TabPane tab="News" key="2">
                           123
                        </TabPane>
                        <TabPane tab="Comments" key="3">
                            <CommentsTab
                                id={match.params.id}
                                user={user}
                                isAuthorized = {isAuthorized}
                            />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

CampaignPage.propTypes = {
    isDeleted: PropTypes.bool.isRequired,
    deleteCampaign: PropTypes.func.isRequired,
    getReward: PropTypes.func.isRequired,
    donateMoney: PropTypes.func.isRequired,
    changeRatingState: PropTypes.func.isRequired,
    getCampaign: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    campaign: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default CampaignPage;
