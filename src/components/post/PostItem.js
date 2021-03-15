/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
// import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PostItem = ({post}) => {

	//const { service } = props - destrucrizing this from props in line above 
	const shortText = (text, maxLength = 50) => {
		if (!text) { return ''}
		if (text.length <= maxLength ) { return text }
		return text.substr(0, maxLength) + '...'
	}

	return (

				<Row key={post.id}>
					<Col xs lg="2">
						<Row>{post.postOwnerUsername}</Row>
					</Col>
					<Col xs lg="2">
						<Row>{post.symbol}</Row>
						<Row>{post.prediction}</Row>
						<Row>{post.predictionEndDate}</Row>
					</Col>
					

					<Col md="auto">{post.call}</Col>
				</Row>

	)
}

export default PostItem