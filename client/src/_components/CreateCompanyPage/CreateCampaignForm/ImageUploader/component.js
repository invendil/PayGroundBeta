import { Upload, Icon, Modal } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import {companyService} from "../../../../_services";
import {companyConstants} from "../../../../_constants";
import {bindActionCreators} from 'redux'

const { Dragger } = Upload;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const props = {
    name: 'file',
    multiple: true,
    listType: 'picture-card',
    action:
        'https://api.cloudinary.com/v1_1/morzh29/image/upload?upload_preset=payground29',
    accept: 'image/*',
};

class ImageUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    handleChange (info) {


        const rest = [...info.fileList];
        const { status } = info.file;
        if (status !== 'uploading') {
            const imagesUrl = info.fileList.map(item => item.response.url);
            this.props.setFieldValue('images', imagesUrl);
        }
    };

    async handlePreview (file) {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleCancel () {this.setState({ previewVisible: false });}

    render() {
        const { previewVisible, previewImage, fileList } = this.state;

        return (
            <div>
                <Dragger
                    {...props}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    defaultFileList={this.props.values.images}
                >
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                        Click or drag image to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                    </p>
                </Dragger>
                <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img
                        alt="uploaded image"
                        style={{
                            width: '100%',
                            height: '100%',
                            marginTop: '14px'
                        }}
                        src={previewImage}
                    />
                </Modal>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {companies} = state;

    return {
        companies : companies
    }
}

/*function matchDispatchToProps(dispatch) {
    return bindActionCreators({
            putImages: function(images, companies){
                return {
                    type: companyConstants.IMAGES_SET,
                    images: images,
                    categories : companies.categories
                };
            }},
            dispatch

    );
}*/


const connected = connect(mapStateToProps)(ImageUploader);
export { connected as ImageUploader };

