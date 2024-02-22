import React from 'react'
import './index.scss'
export default function ClientFeature() {

  return (
      <section className="whatsInitClientsSec">
        <div className="maContainer">
              <h2 className="secTitle"><span>What’s in it</span>for your clients?</h2>
              
            <div className="technolbar-ta">
                <div className="tab-content">
                    <div id="technology1" className="tab-pane active">
                        <div className="tab-run-business-img">
                                <img src="https://www.miraeassetpartners.com/asset/images/sidemenu.webp" alt="sidemenu"/>
                        </div>
                    </div> 
                </div>
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" data-toggle="tab" href="#technology1">
                            <i>1</i>
                            <span role="presentation"></span>
                            Assurance of brand Mirae Asset
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#technology2">
                            <i>2</i>
                            <span role="presentation"></span>
                            Range of products on a single platform
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#technology3">
                            <i>3</i>
                                <span role="presentation"></span>
                            1-click order placement across products
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#technology4">
                            <i>4</i>
                            <span role="presentation"></span>
                            Stable platform for smooth processing
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#technology5">
                            <i>5</i>
                                <span role="presentation"></span>
                            Fundamental data & technical charts
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#technology6">
                            <i>6</i>
                                <span role="presentation"></span>
                            Single-view screen for complete portfolio
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#technology7">
                            <i>7</i>
                                <span role="presentation"></span>
                            Advanced order placement options
                        </a>
                    </li>
                </ul>
            </div> 
        </div>
    </section>
  )
}
