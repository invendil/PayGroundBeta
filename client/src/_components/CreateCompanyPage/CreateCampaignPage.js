import React  from 'react';
import { Formik } from 'formik';
import { CreateCampaignForm } from './CreateCampaignForm/component';
import SimpleMDE from 'simplemde';
import {companyActions} from "../../_actions";
import { connect } from 'react-redux';



class CreateCampaignPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const categoriesArr = ['Games', 'Video', 'Music'];
        const { dispatch } = this.props;
        return (
            <Formik
                initialValues={{
                    title: '',
                    link: '',
                    category: categoriesArr[0],
                    goalAmount: 1,
                    expirationDate: new Date(),
                    descFieldValue: '## das'
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        let html = SimpleMDE.prototype.markdown(values.descFieldValue);
                        let company = {
                            name : values.title,
                            category : values.category,
                            urlvideo : values.link,
                            goalmoney : values.goalAmount,
                            finishdate : values.expirationDate,
                            descriptionMD : html
                        }
                        this.setState({
                            company : company
                        })
                        dispatch(companyActions.addcompany(company));
                        document.getElementById('kek').innerHTML = SimpleMDE.prototype.markdown(values.descFieldValue);

                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                render={CreateCampaignForm}
            />
        );
    }
};

function mapStateToProps(state) {

    return {
        company : state.companies.company
    };
}

const connected = connect(mapStateToProps)(CreateCampaignPage);
export { connected as CreateCampaignPage };