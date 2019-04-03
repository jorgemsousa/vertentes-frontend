import React, { Component } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './styles.css';

export default class whoweare extends Component {
  render() {
    return (

        <div>
          <Navbar />
          <section className="paralax-whoweare">
          </section>
          <div className="container-whoweare">
             <h1>Quem somos?</h1>
                <p>
                A <strong>Campos das Vertentes </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean ac condimentum diam, quis viverra massa. Curabitur non sodales orci, et commodo urna. Etiam 
                imperdiet sed mauris sed dictum. Integer posuere ullamcorper diam in pellentesque. Donec lobortis 
                neque eros, mollis euismod leo rhoncus ultrices. Sed sapien ex, tempus nec vestibulum eget, iaculis 
                vel urna. Nullam vel gravida sapien, vitae iaculis nulla. Nam tristique justo ut arcu suscipit, nec 
                bibendum lacus cursus. Integer ac leo turpis. Nullam nisi metus, euismod a dui quis, tristique elementum 
                unc. Suspendisse non tortor faucibus, semper odio nec, pretium quam. In lacus ex, fringilla vel nunc eget, 
                utrum sodales elit. Proin consectetur scelerisque eros, ac aliquam ipsum interdum quis. Integer laoreet 
                sodales turpis at tristique. Nulla egestas malesuada vehicula.
                </p>
                <p>
                Proin rutrum fringilla eros, in sodales dui maximus at. Vestibulum consectetur faucibus consectetur. 
                Fusce tellus neque, imperdiet et consectetur non, tempor non eros. Nam aliquet ipsum et orci aliquam 
                accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi 
                scelerisque, nisi vitae euismod semper, ipsum felis imperdiet dui, quis luctus purus velit at tortor. 
                Pellentesque ac diam lacus. Cras et eros semper, feugiat nisi in, tincidunt dui. Etiam a pharetra purus.
                </p>
                <p>
                Nullam sed lectus sit amet risus faucibus molestie eget ut metus. Duis euismod, sem quis congue aliquet, 
                orem ante fermentum mi, et fringilla urna sapien ut ante. Aenean maximus felis sed est vestibulum, 
                vitae pharetra leo volutpat. Maecenas cursus velit et mauris pharetra efficitur. Nulla turpis nisi, 
                iaculis in interdum ornare, tempor eget neque. Sed tristique pulvinar ipsum, a facilisis dui feugiat sed. 
                Nulla facilisi. Phasellus nec hendrerit augue. Sed sodales mi euismod dui lacinia efficitur.
                </p>
                <p>
                Vivamus egestas tortor eget ipsum dictum tempus. Nunc venenatis nisi ut nisi finibus pharetra. 
                Sed laoreet mattis consequat. Fusce imperdiet ut sapien id posuere. Nullam in faucibus lorem. 
                Sed non feugiat ex, vel aliquet odio. Curabitur ac tellus tristique, commodo lorem sed, pulvinar orci. 
                Nunc interdum ipsum mauris, nec placerat eros venenatis in. Sed ut urna lacus. Donec bibendum dolor 
                in nibh condimentum pulvinar vitae in nunc. Aenean quis tristique arcu, vestibulum interdum tellus. 
                Maecenas tincidunt urna enim, at fringilla mauris pulvinar nec. Vestibulum sodales imperdiet nisl, 
                sit amet mattis orci ultricies vel.
                </p>
                <p>
                Integer dapibus malesuada nisl, non consequat enim rutrum ut. Sed neque massa, pharetra sed nibh nec, 
                pellentesque posuere est. Etiam finibus tincidunt sapien, non auctor urna malesuada quis. In arcu felis, 
                ravida nec eleifend et, porta molestie mi. Morbi at semper orci. Aenean vulputate nibh non est tempus 
                placerat. Cras scelerisque aliquam orci sit amet sollicitudin. Fusce lorem sem, volutpat ut pretium a, 
                interdum a augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus a mauris eget 
                enim aliquam pharetra quis vulputate erat. Nulla a mi sem. Morbi non imperdiet tellus.
                </p>    
          </div>
          <Footer />
       </div>
       
    );
  }
}
