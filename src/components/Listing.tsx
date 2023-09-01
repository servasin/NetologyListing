import data from '../data/etsy.json'

type ListeningProps = {
  items: typeof data
}

function Listing({ items }: ListeningProps): JSX.Element {

  return (
    <div className="item-list">
    {items.map((item) =>
      <div key={item.listing_id} className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage?.url_570xN}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">
            {item.title&&
            (item.title.length <= 50 ? item.title : item.title?.slice(0,50) + '...')}
          </p>
          <p className="item-price">
            {item.currency_code === 'USD' ? '$' : '' }
            {item.currency_code === 'EUR' ? '€' : '' }

            {item.price}
            
            {item.currency_code === 'USD' || item.currency_code === 'EUR' ? '' : ' ' + item.currency_code }
          </p>
          <p className=
            {`item-quantity `+
              `${item.quantity&&(item.quantity <=10 ? 'level-low' : '')}`+
              `${item.quantity&&(item.quantity>=10 && item.quantity<=20 ? 'level-medium' : '')}`+
              `${item.quantity&&(item.quantity >20 ? 'level-high' : '')}`
            }
          >{item.quantity} left</p>
        </div>
      </div>
      )}  
    </div>
  )
}

export default Listing
