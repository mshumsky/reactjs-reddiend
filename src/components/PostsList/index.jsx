import PropTypes from "prop-types";
import React from "react";
import {useSelector} from "react-redux";
import {AutoSizer, List} from "react-virtualized";
import cmbcl from "../../utils/cmbcl";
import Post from "../Post";
import "./styles.css";

export default function PostsList({className}) {
	const posts = useSelector((store) => store.posts);

	return (
		<div className={cmbcl("PostsList", className)}>
			<AutoSizer className="PostsList__Autosizer">
				{({width, height}) => (
					<List
						className="PostsList__Item"
						width={width}
						height={height}
						rowCount={posts.length}
						rowHeight={100}
						rowRenderer={({index, style, key}) => {
							const post = posts[index];
							return <Post className="PostsList__Item" id={post.id} style={style} key={key} />;
						}}
					/>
				)}
			</AutoSizer>
		</div>
	);
}

PostsList.propTypes = {
	className: PropTypes.string
};

PostsList.defaultProps = {
	className: ""
};
