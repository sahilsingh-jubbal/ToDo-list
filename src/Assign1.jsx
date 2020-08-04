import React, { useState } from 'react';
import DishDetails from './DishDetails';
import Sdata5 from './Sdata5';
import ModalUp from './ModalUp';
import Button from '@material-ui/core/Button';
import Footer2 from './Footer2';

function Assign1() {

    var [Cimg, setImg] = useState('');
    var [name, setname] = useState('');
    var [list, Setlist] = useState({});
    var [Cbtn, Ubtn] = useState('');
    var [icon, seticon] = useState(false);

    const [value, setValue] = React.useState(2);

    function show(Cname) {
        setImg(Cname);
    }
    function show2(Cname2) {
        setname(Cname2);

    }
    function gogo(wowone) {
        console.log(wowone);
        Setlist(wowone);
        seticon(true);
        Ubtn(' Submit Comment');
    }

    return (<>

        <div className='container'>
            <div className='row'>

                {
                    Sdata5.map((val, index) => {
                        return <DishDetails
                            img={val.img}
                            action={show}
                            name={val.name}
                            action2={show2}
                            wowone={val.list}
                            action3={gogo}

                        />
                    })
                }
            </div>
        </div>

        {icon ?
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div class="card w-25 shadow mb-5" id='details_Dish'>
                            <img src={Cimg} className='img-fluid' />
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-12 shadow mt-5 mb-5 rounded' id='comments'>
                        <h1>{list.p5}</h1>
                        <h5>{list.p1}</h5>
                        <h5>{list.p2}</h5>
                        <h5>{list.p3}</h5>
                        <h5>{list.p4}</h5>


                        <button className='btn btn-outline-secondary' variant="contained" data-toggle="modal" data-target="#exampleModal">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg>
                            {Cbtn}
                        </button>

                    </div>
                </div>
            </div>
            : null
        }

        <ModalUp />
        <Footer2 />

    </>);

}
export default Assign1;