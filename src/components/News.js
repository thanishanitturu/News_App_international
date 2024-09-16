// import React, { Component, useEffect,useState } from 'react';
// import NewsItem from "./NewsItem";
// import Spinner  from './spinner';
// import PropTypes from 'prop-types'


// export default class News extends Component {

//     static defaultProps=
//     {
//         q:"climatic change",
//         pageSize:15,

//     }
//     static propTypes={
//         q:PropTypes.string,
//         pageSize:PropTypes.number,
//     }

//     articles= [
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Telegram: 'The dark web in your pocket'",
//             "description": "The arrest of Telegram’s chief executive in France has ignited a debate about moderation on his app.",
//             "url": "https://www.bbc.co.uk/news/articles/cdey4prn3e1o",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/37ce/live/ef0b14c0-66fb-11ef-b970-9f202720b57a.jpg",
//             "publishedAt": "2024-08-31T10:37:17.6804169Z",
//             "content": "Criminals like the dark web because of the anonymity it provides - internet traffic is bounced around the world, obscuring people's locations. Pinpointing who is behind certain usernames is extremely… [+1158 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Ozempic weight loss: Jabs could slow ageing, researchers say",
//             "description": "New studies suggest the weight loss drug could be used to treat a range of issues, including heart failure.",
//             "url": "https://www.bbc.co.uk/news/articles/ce81j919gdjo",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/90c1/live/62ff4780-674b-11ef-b22f-45cb38364ef2.jpg",
//             "publishedAt": "2024-08-31T08:22:22.7561709Z",
//             "content": "The new data has been published in a number of medical journals, including the Journal of the American College of Cardiology (JACC), which Prof Krumholz edits.\r\n\"These ground-breaking medications are… [+1937 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Oasis fans scramble for tickets as band warns against reselling",
//             "description": "Customers report issues accessing websites selling tickets for the band's comeback gigs in the UK and Ireland next year.",
//             "url": "https://www.bbc.co.uk/news/articles/c5y8wer58x6o",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6303/live/e79e6410-6770-11ef-b43e-6916dcba5cbf.jpg",
//             "publishedAt": "2024-08-31T08:22:21.0066062Z",
//             "content": "Shortly after a three-hour pre-sale for a limited number of fans began on Friday, tickets for the UK gigs were being listed online for more than £6,000 - around 40 times the face value of a standing … [+2545 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Germany on brink of far-right political earthquake",
//             "description": "The far-right Alternative for Germany is set to do very well in state elections in the east.",
//             "url": "https://www.bbc.co.uk/news/articles/c05jvve89g3o",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/31b6/live/4539fb70-66e0-11ef-8c32-f3c2bc7494c6.png",
//             "publishedAt": "2024-08-31T01:22:10.0847397Z",
//             "content": "But its unlikely to overturn a broader discontent that for many AfD supporters isnt just based on anger about mass immigration.\r\nPeople also talk of wanting to fight what they see as over-zealous gre… [+513 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Elsa Majimbo rant reignites debate on 'black tax'",
//             "description": "Kenyan influencer Elsa Majimbo's now-deleted rant against giving family members cash renews a debate.",
//             "url": "https://www.bbc.co.uk/news/articles/cvg509dp9mjo",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f204/live/38c49080-66b3-11ef-b43e-6916dcba5cbf.jpg",
//             "publishedAt": "2024-08-31T01:07:07.5682566Z",
//             "content": "Ms Ajalo and her three siblings were raised by a single mother and relatives assisted her with various things, from paying school fees, to groceries and even medical expenses.\r\n\"It's not a burden, it… [+1699 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Harris has thrived in debates - will her tactics work on Trump?",
//             "description": "Debates have played a major role in her political career, but the showdown on 10 September will have the highest stakes yet.",
//             "url": "https://www.bbc.co.uk/news/articles/c3rd1yzgl0qo",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9d84/live/8d7568b0-6655-11ef-b970-9f202720b57a.jpg",
//             "publishedAt": "2024-08-31T00:37:16.162059Z",
//             "content": "His first 2020 presidential debate against Mr Biden devolved into an unintelligible melee when Trump kept interrupting. At one point, Mr Biden grew so irritated he snapped: Will you shut up, man?\r\nDo… [+1680 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Kuala Lumpur: Inside the search for woman swallowed by sinkhole",
//             "description": "More than 100 rescuers have worked eight days non-stop in search of the missing tourist.",
//             "url": "https://www.bbc.co.uk/news/articles/ced1zzvn0j1o",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d3da/live/671c8ad0-66f1-11ef-b970-9f202720b57a.jpg",
//             "publishedAt": "2024-08-30T23:37:16.2088037Z",
//             "content": "Ms Gali, who was visiting from India's Andhra Pradesh state, was reportedly heading towards a nearby temple with her family when she was swallowed by the 8m (26ft) deep sinkhole on the street of Jala… [+2003 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "President Zelensky sacks Ukraine air force commander Mykola Oleshchuk",
//             "description": "The move came four days after an F-16 fighter jet from Nato allies went down during a Russian barrage.",
//             "url": "https://www.bbc.co.uk/news/articles/c1m0jvd4m3zo",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6d8d/live/f980b080-6706-11ef-a006-fb0775301171.jpg",
//             "publishedAt": "2024-08-30T20:52:16.9279469Z",
//             "content": "In his post to Telegram, Mr Zelensky said he had decided to replace Lt Gen Oleschuk, noting that \"at the command level, we must strengthen ourselves and protect our people\". \r\n\"I am immensely gratefu… [+1712 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Musk's X suspended in Brazil after ruling by Supreme Court judge",
//             "description": "The social media giant says it refused to comply with a judge's order to appoint a legal representative.",
//             "url": "https://www.bbc.co.uk/news/articles/c5y3rnl5qv3o",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ca28/live/b0f0c6a0-670d-11ef-b43e-6916dcba5cbf.jpg",
//             "publishedAt": "2024-08-30T20:52:16.1000277Z",
//             "content": "Justice Moraes has given companies such as Apple and Google a five-day deadline to remove X from its application stores.\r\nPeople attempting to access the platform after the ban through VPNs could be … [+670 chars]"
//         },
        
//         {
            
//             "source": {
//                 "id": "bbc-news",
//                 "name": "BBC News"
//             },
//             "author": "BBC News",
//             "title": "Trump angers abortion opponents with remarks on Florida ban",
//             "description": "Donald Trump criticised Florida's six-week ban when he was asked about a state referendum on expanding abortion rights.",
//             "url": "https://www.bbc.co.uk/news/articles/cy547v72nd4o",
//             "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b716/live/20bcc200-66e5-11ef-947d-738e55252445.jpg",
//             "publishedAt": "2024-08-30T16:22:14.9860162Z",
//             "content": "I am going to be voting that we need more than six weeks, Trump said when pressed. \r\nTrump has criticised Florida's six-week abortion ban before. \r\nLast September he said Florida Governor Ron DeSanti… [+3392 chars]"
//         }
//     ]
//     constructor()
//     {
//         super();
//         console.log("this is a constructor")
//         this.state={
//             articles:this.articles,
//             page:1,
//             loading:false
        
//         }
//     }

//     async update(page)
//     {
//         console.log("cdm")
//         let url=`https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=b203b23c00f541a1a9e5a74ab444d834&page=${this.state.page}&pageSize=${this.props.pageSize}`
//         this.setState({loading:true})
//         let data=await fetch(url);
//         let parseData=await data.json()
//         console.log(parseData);
//         this.setState({articles:parseData.articles,
//             totalResults:parseData.totalResults,
//             loading:false})
//     }
    
//     async componentDidMount()
//     {
//         // console.log("cdm")
//         // let url=`https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=b203b23c00f541a1a9e5a74ab444d834&page=1&pageSize=${this.props.pageSize}`
//         // let data=await fetch(url);
//         // let parseData=await data.json()
//         // console.log(parseData);
//         // this.setState({articles:parseData.articles,totalResults:parseData.totalResults,page:1})
//         // this.update()
//         if (prevProps.q !== this.props.q) {
//             this.setState({ page: 1 }, () => {
//                 this.update(this.state.page);
//             });
//         }
//     }

//     handlePrevious=async()=>
//     {
//         // console.log('previous')
//         // let url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=b203b23c00f541a1a9e5a74ab444d834&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         // this.setState({loading:true})
//         // let data=await fetch(url);
//         // let parseData=await data.json()
//         // console.log(parseData);
//         // this.setState({
//         //     page:this.state.page-1,
//         //     articles:parseData.articles,
//         //     loading:false
//         // })
//         this.setState({page:this.state.page-1})
//         this.update()

//     }
//     handleNext=async()=>
//     {
    
//         // console.log('next')
//         // if(this.state.page+1>Math.ceil(this.totalResults/this.props.pageSize))
//         // {
            
//         // }
//         // else
//         // {
//         //     let url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=b203b23c00f541a1a9e5a74ab444d834&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         //     this.setState({loading:true})
//         //     let data=await fetch(url);
//         //     let parseData=await data.json()
//         //     console.log(data);
//         //     this.setState({
//         //         page:this.state.page+1,
//         //         articles:parseData.articles,
//         //         loading:false
//         //     })
//         // }
//         this.setState({page:this.state.page+1})
//         this.update()
        

//     }

//     render() {
//     return (
//     <div>
//     <div className="container my-3 ">
//     <h2 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey-Top HeadLines</h2>
//     {this.state.loading && <Spinner />}
//     <div className="row no-gutters">
//     {!this.state.loading &&this.state.articles.map((element)=>
//     {
//         return <div className="col-sm-12 col-md-6 col-lg-4" key={element.url}>
//             <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} ImageUrl={element.urlToImage} newsUrl={element.url} title1={element.title?element.title:""} author={element.author} date={element.publishedAt} source={element.source.name} />
//         </div>
//     }
//     ) }
//     </div>
// </div>
// <div className='container d-flex justify-content-between'>
//     <button type="button" disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevious}>&larr; Previous</button>
//     <button type='button' disabled={this.state.page>this.props} className='btn btn-dark' onClick={this.handleNext}> Next &rarr;</button>

// </div>
//     </div>
        
//     )
//     }
// }

import React, { useState, useEffect } from 'react';
import NewsItem from "./NewsItem";
import Spinner from './spinner';
import PropTypes from 'prop-types';

const News = ({ q, pageSize }) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);

    const update = async (page) => {
        let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=b203b23c00f541a1a9e5a74ab444d834&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
    };

    useEffect(() => {
        update(page);
    }, [q, page]);

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        if (page < Math.ceil(totalResults / pageSize)) {
            setPage(page + 1);
        }
    };

    return (
        <div>
            <div className="container my-3">
                <h2 className='text-center' style={{ margin: '35px 0px' }}>News-Top Headlines</h2>
                {loading && <Spinner />}
                <div className="row no-gutters">
                    {!loading && articles.map((element) => {
                        return (
                            <div className="col-sm-12 col-md-6 col-lg-4" key={element.url}>
                                <NewsItem 
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    ImageUrl={element.urlToImage} 
                                    newsUrl={element.url}
                                    title1={element.title ? element.title : ""}
                                    author={element.author} 
                                    date={element.publishedAt} 
                                    source={element.source.name} 
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='container d-flex justify-content-between'>
                <button 
                    type="button" 
                    disabled={page <= 1} 
                    className='btn btn-dark' 
                    onClick={handlePrevious}
                >
                    &larr; Previous
                </button>
                <button 
                    type='button' 
                    disabled={page >= Math.ceil(totalResults / pageSize)} 
                    className='btn btn-dark' 
                    onClick={handleNext}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

News.propTypes = {
    q: PropTypes.string,
    pageSize: PropTypes.number,
};

News.defaultProps = {
    q: "climatic change",
    pageSize: 15,
};

export default News;
