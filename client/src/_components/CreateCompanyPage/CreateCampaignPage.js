import React  from 'react';
import { Formik } from 'formik';
import { CreateCampaignForm } from './CreateCampaignForm/component';
import SimpleMDE from 'simplemde';
import {companyActions, userActions} from "../../_actions";
import { connect } from 'react-redux';
import {history} from '../../_helpers/history'
import converter from 'html-to-markdown';
import {companyConstants} from "../../_constants";
import {bindActionCreators} from 'redux'
import { validationSchema } from './validationSchema';
import {Redirect} from "react-router-dom";

class CreateCompanyPage extends React.Component{


    componentDidMount() {
        this.props.dispatch(companyActions.getCategories());
    }


    render(){


        const { dispatch, companies } = this.props;
        const { categories, createdCompanyId } = companies;
        /*const markdown = converter.convert('<h2> Happy Journey </h2>');
        alert(markdown);*/
        return (
            <div>
                {companies.createdCompanyId ? <Redirect to={`/companies/${companies.createdCompanyId}`}/> : null}
                {companies.loadingCategories && <h1>Loading categories...</h1>}
                {companies.categories &&
                    <Formik
                        initialValues={{
                            title: '',
                            link: '',
                            categoryList: categories ? categories: ['1', '2'],
                            images: [],
                            categorySelected : 1,
                            goalAmount: 1,
                            expirationDate: new Date(),
                            descFieldValue: '## das',
                            images : []
                        }}
                        /*validationSchema={validationSchema}*/
                        onSubmit={(values, actions) => {

                            const html =  SimpleMDE.prototype.markdown(values.descFieldValue);
                            setTimeout(() => {
                                let html = SimpleMDE.prototype.markdown(values.descFieldValue);
                                let company = {

                                    urlvideo : values.link ? values.link : "default link",
                                    goalmoney : values.goalAmount,
                                    name : values.title ? values.title : "default name",
                                    categoryid : categories.indexOf(values.categorySelected) +1 ,
                                    finishtime : values.expirationDate,
                                    description : html,
                                    images : values.images

                                }

                                dispatch(companyActions.addCompany(company));
                                document.getElementById('kek').innerHTML = html;
                                //alert(htmlToMarkdown(html));

                                //alert(JSON.stringify(company, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                        render={CreateCampaignForm}
                    />
                }
            </div>
        );
    }
};

function mapStateToProps(state) {
    const {companies} = state;

    return {
        companies: companies
    }
}





const connected = connect(mapStateToProps)(CreateCompanyPage);
export { connected as CreateCompanyPage };