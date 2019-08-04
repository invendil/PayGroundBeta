import React from 'react';
import  PropTypes  from 'prop-types';
import  moment from 'moment-es6';
import { Table } from 'antd';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RewardsTab(props) {
    const { rewards } = props;

    const columns = [
        {
            title: 'Supported campaign',
            dataIndex: 'campaign',
            render: (text, record) => (
                <Link to={`/companies/${record.campaignId}`}>{text}</Link>
            ),
            width: '25%'
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },


    ];

    const data = rewards.map(reward => {
        return {
            key: reward.id,
            campaignId: reward.companyId,
            campaign: reward.companyName,
            name: reward.name,
            description: reward.description,
            amount : reward.amount
        };
    });

    return (
        <Container>
            <Table
                columns={columns}
                dataSource={data}
                className="border mt-2"
                pagination={false}
            />
        </Container>
    );
}

RewardsTab.propTypes = {
    rewards: PropTypes.array.isRequired,
};

export default RewardsTab;
