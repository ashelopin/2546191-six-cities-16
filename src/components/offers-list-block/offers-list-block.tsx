import { OfferPreview } from '../../types/offerPreview';
import PlaceCard from '../place-card/place-card';

type OfferListBlockProps = {
    offers : OfferPreview[];
}


function OfferListBlock ({offers}:OfferListBlockProps) :JSX.Element{
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.map((el) =><PlaceCard {...el} key={el.id}/>)}
    </div>
  );
}

export default OfferListBlock;
