import React, { useState } from 'react';
import './news.css';
function News() {

    var [Cname, Uname] = useState('');
    var [Cbtn, Ubtn] = useState([]);
    var [Allready, setAllready] = useState([]);
    var [Show, setShow] = useState(true);
    var [notFound, setNotFound] = useState(false);
    var [showSearch, setshowSearch] = useState(false);

    function read(eve) {
        console.log(eve.target.value);
        Uname(eve.target.value);
    }
    function clickbtn(eve) {
        // Ubtn(Cname);
        if (eve.target.name === 'searchbtn' || eve.key === 'Enter') {
            if (Cname === '') { alert('Enter data to Search') }
            else {
                setshowSearch(true);
                fetch(`https://newsapi.org/v2/everything?q=${Cname}&apiKey=3bcfae5582414eeb8d6f4b18d8da3344`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data.totalResults === 0) {
                            // alert('not found by manulally');
                            setNotFound(true);
                            setShow(false);
                            setshowSearch(false);

                        }

                        else {
                            console.log('from else part', data.articles);
                            var totalArticles = data.articles;
                            Ubtn(totalArticles);
                            setShow(false);
                            setNotFound(false);
                            setshowSearch(true);
                        }
                    })
                // .catch(errpr => alert('Oops something went wrong'))
                Uname('');
            
            }
        }
    }


    fetch(`https://newsapi.org/v2/everything?q=india&apiKey=3bcfae5582414eeb8d6f4b18d8da3344`)
        .then(response => response.json())
        .then(data => {
            var totalArticles = data.articles;
            setAllready(totalArticles);
        })
    // .catch(errpr => alert('Oops something went wrong'))


    return (<>
        <h1 className='text-center my-4'>Welcome to india news website</h1>
        <div className='div_for_news'>
            <input type="text" value={Cname} onChange={read} onKeyPress={clickbtn} className=" text_for_news" placeholder="Search news" />
            <button className='btn btn-dark' name='searchbtn' id='searchbtn' onClick={clickbtn}>Search</button>
        </div>
        {/* <h1>{Cbtn}</h1> */}


        {showSearch ? <div> {
            Cbtn.map((val, index) => {
                {/* console.log('from map function',val.description); */ }
                console.log('from map function', val.title);
                return (<>
                    <a href={val.url} target='_blanck' id='link_for_a'>
                        <div id='news_details' className='mx-2'>
                            <hr />
                            <div className='container' id='innerOne'>
                                <h2 id='htwo'>{val.title}</h2>
                                <h5>{val.description}</h5>
                                <span id='OneRow'>
                                    <a href={val.url} target='_blanck'>More Info</a>
                                    <p>publishedAt: {val.publishedAt}</p>
                                </span>
                            </div>
                            <hr />
                        </div>
                    </a>
                </>
                )
            })
        }
        </div> : null}

        {Show ? <div>{

            Allready.map((val, index) => {
                return (<>
                    <a href={val.url} target='_blanck' id='link_for_a'>
                        <div id='news_details' className='mx-2'>
                            <hr />
                            <div className='container' id='innerOne'>
                                <h2>{val.title}</h2>
                                <h5>{val.description}</h5>
                                <span id='OneRow'>
                                    <a href={val.url} target='_blanck'>More Info</a>
                                    <p>publishedAt: {val.publishedAt}</p>
                                </span>
                            </div>
                            <hr />
                        </div>
                    </a>
                </>
                )
            })
        }
        </div> : null}


        {notFound ? <div className='container'><h2 id='notOne' className='my-4'>No Match Found</h2></div> : null}



    </>);
}
export default News;