import {faHeart, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {delPostCreatorAsync, likePostCreatorAsync} from "../../redux/reducers/posts";
import clsx from "../../utils/clsx";
import cmbcl from "../../utils/cmbcl";
import "./styles.css";

export default function Post({className, id, style}) {
	const post = useSelector((store) => store.posts.find((post) => post.id === id));
	const dispatch = useDispatch();

	const handleLike = () => {
		dispatch(likePostCreatorAsync(id));
	};

	const handleDelete = () => {
		dispatch(delPostCreatorAsync(id));
	};

	const likeClasses = clsx({
		Post__Like: true,
		"Post__Like--Active": post.liked
	});

	return (
		<div className={cmbcl("Post", className)} style={style}>
			<h3 className="Post__Title">
				<a href={post.link} target="_blank" rel="noreferrer">
					{post.title}
				</a>
			</h3>
			<div className="Post__Controls">
				<FontAwesomeIcon className={likeClasses} icon={faHeart} onClick={handleLike} />
				<FontAwesomeIcon className="Post__Delete" icon={faTrash} onClick={handleDelete} />
			</div>
		</div>
	);
}

Post.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	style: PropTypes.any
};

Post.defaultProps = {
	className: ""
};
