import React, {useState} from "react";
import {AdCardListStyled} from "./AdCardList.styles";
import Button from "components/units/Button/Button";
import AdCardItem from "./AdCardItem";

const AdCardListLoadMore = ({ads}) => {
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 9;

	const adsToShow = [...ads].slice(0, currentPage * itemsPerPage);

	const showMoreItems = () => {
		setCurrentPage((prevValue) => prevValue + 1);
	};

	return (
		<AdCardListStyled>
			<div className="list-scroll">
				{ads && adsToShow.map((ad) => <AdCardItem key={ad.id} ad={ad}></AdCardItem>)}
			</div>
			<Button type="button" text="Load more" onClick={showMoreItems}></Button>
		</AdCardListStyled>
	);
};
export default AdCardListLoadMore;