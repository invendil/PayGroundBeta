import React from 'react';
import { Formik } from 'formik';
import { CreateCampaignForm } from './EditCampaignForm/component';
import { validationSchema } from './validationSchema';
import {markDownHtmlConverter} from '../../_utils/markDownConverter'
import  PropTypes  from 'prop-types';
import { Redirect } from 'react-router-dom';
import { notification } from 'antd';
import moment from 'moment-es6';

class CampaignEditorPage extends React.Component {
    componentDidMount() {
        const { match, getCampaign, getCategories, categories, setEditing, setCreating } = this.props;
        if (categories.length === 0) getCategories();
        if (match.params.id) {
            setEditing();
            getCampaign(match.params.id);
        } else {
            setCreating();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            if (this.props.match.params.id) {
                this.props.setEditing();
            } else {
                this.props.setCreating();
            }
        }
    }

    componentWillUnmount() {
        this.props.resetCampaignResponse();
    }

    render() {
        // const { isCreating } = this.state;
        const {
            isCreating,
            categories,
            createCampaign,
            isLoading,
            campaignResponse,
            error,
            campaign,
            updateCampaign,
        } = this.props;

        return (
            <div>
                {error &&
                    notification.error({
                        message: 'Submitting error',
                        description: error,
                    })}
                {campaignResponse.id ? (
                    <Redirect to={`/companies/${campaignResponse.id}`} />
                ) : null}
                <Formik
                    enableReinitialize
                    initialValues={
                        (campaign && campaign.images && !isCreating)
                            ? {
                                  title: campaign.name,
                                  category:
                                      campaign.category && !isCreating
                                          ? campaign.category.name
                                          : '',

                                  description: markDownHtmlConverter.htmlToMarkDown(campaign.description),
                                  link: campaign.urlVideo,
                                  images: campaign.images,
                                  goalAmount: campaign.goalMoney,
                                  expirationDate: moment(campaign.finishTime)._d,
                              }
                            : {
                                  title: '',
                                  category: categories ? categories[0] : null,
                                  description: '',
                                  link: '',
                                  images: [],
                                  goalAmount: 0,
                                  expirationDate: new Date(),
                              }
                    }
                   // validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        const html = markDownHtmlConverter.markDownToHtml(values.description);
                        const company = {

                            urlvideo : values.link ? values.link : "default link",
                            goalmoney : values.goalAmount,
                            name : values.title ? values.title : "default name",
                            categoryid : categories.indexOf(values.category) +1 ,
                            finishtime : values.expirationDate,
                            description : html,
                            images : values.images
                        }

                        console.log(company);
                        if (isCreating) {
                            console.log('cr');
                            createCampaign(company);
                        } else {
                            updateCampaign({
                                id: campaign.id,
                                updateInfo: { ...values },
                            });
                        }
                        actions.setSubmitting(false);
                    }}
                    render={formikProps => (
                        <CreateCampaignForm
                            {...formikProps}
                            categoriesArr={categories}
                            isLoading={isLoading}
                        />
                    )}
                />
            </div>
        );
    }
}

CampaignEditorPage.propTypes = {
    setEditing: PropTypes.func.isRequired,
    setCreating: PropTypes.func.isRequired,
    isCreating: PropTypes.bool.isRequired,
    getCategories: PropTypes.func.isRequired,
    getCampaign: PropTypes.func.isRequired,
    createCampaign: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    updateCampaign: PropTypes.func.isRequired,
    resetCampaignResponse: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    campaign: PropTypes.object,
    campaignToUpdate: PropTypes.object,
    campaignResponse: PropTypes.shape({
        id: PropTypes.number,
    }),
};

export default CampaignEditorPage;
