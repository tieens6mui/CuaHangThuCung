import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>DOGS </h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Chúng là những con chó thông minh, mạnh mẽ và trung thành nhất trên trái đất có chung tổ tiên với sói. Đôi khi chúng nó rất ngáo
               và điên khùng, làm nhừng trò mà chó thường không bao giờ làm.'
              label='Husky'
              path='/products'
            />
            </ul> 
            <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Pit bull là một giống chó tầm trung bình và nhỏ, chúng cao từ 45 đến 55 cm, nặng từ 18 đến 22 kg, có nguồn gốc từ châu Mỹ,
              được nuôi ở Anh và nuôi để làm vật giữ nhà hoặc nó giữ bạn luôn.'
              label='Pitbull'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Giống chó Golden Retriver là một giống chó có kích thước trung bình rất hiền lành và thông minh, trung thành và thích chơi đùa,
              đôi khi chúng còn thông minh hơn đứa bạn thân của bạn. '
              label='Golden'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='Chihuahua là giống chó nhỏ con có đầu tròn và mõm ngắn. Nó có đôi mắt to tròn, màu sẫm gần như đen, đôi khi là màu đỏ ruby sẫm,
              tuy thân hình nhỏ nhưng võ mồm lại to'
              label='Chihuahua'
              path='/products'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Giống chó Corgi (hay còn được gọi là Corgi Welsh- chó chân ngắn), là giống chó có thể nói chúng dễ thương nhất Thế giới. Chúng có nguồn gốc từ xứ Wales, nước Anh với đôi chân ngắn'
              label='Corgi'
              path='/products'
            />
              <CardItem
              src='images/img-8.jpg'
              text='Shiba Inu (柴犬) là loại chó nhỏ nhất trong sáu giống chó nguyên thủy và riêng biệt đến từ Nhật Bản. Tuy đến từ Nhật Bản nhưng ưa bị thanh niên Hàn Quốc lôi ra lắm.'
              label='Shiba-Inu'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
               <CardItem
              src='images/img-9.jpg'
              text='Pug, hay thường được gọi là chó mặt xệ, là giống chó thuộc nhóm chó cảnh có nguồn gốc từ Trung Quốc, chúng có một khuôn mặt nhăn, mõm ngắn, và đuôi xoăn'
              label='Pug'
              path='/products'
            /> 
            </ul>
            <ul className='cards__items'>
              <CardItem
              src='images/img-10.jpg'
              text='Chó Phú Quốc là một loại chó riêng của đảo Phú Quốc, Việt Nam. Nó có đặc điểm phân biệt với các loại chó khác là các xoáy lông ở trên sống lưng'
              label='Phú Quốc'
              path='/products'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Chó Lạp Xưởng là giống cảnh khuyển thân dài, chân ngắn hơn nhiều so với chiều dài cơ thể, nhắc đến chúng bạn sẽ liên tưởng đến hot dog'
              label='Lạp Xưởng'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
               <CardItem
              src='images/img-12.jpg'
              text='Chó Becgie Đức (German Shepherd Dog hay chó GSD) xuất hiện vào năm 1899 do Đại Úy của quân đội Đức'
              label='Becgie'
              path='/products'
            />
              <CardItem
              src='images/img-13.jpg'
              text='Chó Pomeranian (Pom) hay còn được gọi là chó Phốc Sóc (fox sóc) có nguồn gốc từ châu Âu với bộ lông trắng'
              label='Phốc Sóc'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Chó Bull Anh (English Bulldog) là một giống chó chiến cổ có tổ tiên là chó ngao châu Á, không như ngao Tây Tạng'
              label='Bull Anh'
              path='/products'
            />
            </ul>
            <h1>CATS</h1> 
            <ul className='cards__items'>
              <CardItem
              src='images/img-5.jpg'
              text='Mèo tai cụp là một giống mèo nhà với sự đột biến sinh học tự nhiên gen lặn gây ảnh hưởng đến phần sụn toàn thân, 
              khiến cho tai bị "cụp".'
              label='Mèo Tai Cụp'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Mèo Ba Tư hay còn gọi là mèo Ba Tư mặt tịt là một giống mèo có nguồn gốc từ Ba Tư với bộ lông vàng và khuôn mặt láo cá.'
              label='Mèo Ba Tư'
              path='/products'
            />     
            <CardItem
              src='images/img-15.jpg'
              text='Mèo Anh lông ngắn có thân hình không dài lắm, có khung xương,xương sống chắc chắn, to và ngực to.'
              label='Mèo Anh lông ngắn'
              path='/products'
            />
         </ul>
         <ul className='cards__items'>
              <CardItem
              src='images/img-16.jpg'
              text='Mèo Sphinx hay còn gọi là mèo không lông Sphinx hay còn được biết đến là mèo Canada hoặc mèo Mexico không lông.'
              label='Mèo Sphynx'
              path='/products'
            />
            <CardItem
              src='images/img-17.jpg'
              text='Mèo Bombay là giống mèo lai tạo giữa mèo Miến Điện đen với Mèo đen lông ngắn Mỹ. Nó bay nhảy như bom vậy á'
              label='Mèo Bombay'
              path='/products'
            />
            <CardItem
              src='images/img-18.jpg'
              text='Mèo Munchkin là một giống mèo nhà có nguồn gốc từ Hoa Kỳ. Chúng được đặc trưng bởi tứ chi ngắn ngủn.'
              label='Mèo Munchkin'
              path='/products'
            />
         </ul>
         <ul className='cards__items'>
              <CardItem
              src='images/img-19.jpg'
              text='Mèo rừng Na Uy là một giống mèo nhà được tìm thấy ở Bắc Âu. Tìm không có hình của nó nên để hình này thay thế. '
              label='Mèo rừng Na Uy'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-20.jpg'
              text='Mèo lông ngắn là một giống mèo nhà được cho là hậu duệ của những con mèo châu Âu được mang đến Bắc Mỹ'
              label='Mèo Mỹ lông ngắn'
              path='/products'
            />
           
            <CardItem
              src='images/img-21.jpg'
              text='Mèo Nga mắt xanh hay Rusian Blue là giống mèo Nga mắt xanh. Màu lông tuy hơi xám nhưng khá dày và bông.'
              label='Mèo Nga xanh'
              path='/products'
            />
         </ul>
         <ul className='cards__items'>
              <CardItem
              src='images/img-22.jpg'
              text='Mèo lông ngắn Ba Tư có nguồn gốc tại Mỹ.'
              label='Mèo Exotic'
              path='/products'
            />
            <CardItem
              src='images/img-23.jpg'
              text='Mèo Birman là một giống mèo nhà tại Miến Điện.'
              label='Mèo thần Miến Điện'
              path='/products'
            />
           
            <CardItem 
              src='images/img-24.jpg'
              text='Một chiếc Mèo cỏ đến từ Việt Nam, rất là cute.'
              label='Mèo cỏ Việt Nam'
              path='/products'
            />
         </ul>
         <h1 >DOG FOOD</h1> 
            <ul className='cards__items'>
              <CardItem
              src='images/img--1.jpg'
              text='Thức ăn cho chó Home Dog là loại thức ăn phù hợp với các dòng chó nhỏ: corgi, bull pháp, poodle,
              được làm từ ngũ cốc, mỡ gà, muối, thịt gà'
              label='Home Dog'
              path='/products'
            />
            <CardItem
              src='images/img--2.jpg'
              text='Thức ăn hạt mềm Zenith cho chó mèo là một loại thức ăn đặc biệt có nguồn gốc từ Hàn Quốc.
              Dành cho tất cả các giống chó mèo ở mọi lứa tuổi khác nhau'
              label='Zenith'
              path='/products'
            />     
            <CardItem
              src='images/img--3.jpg'
              text='Thức ăn hạt cho chó lớn hơn 6 tháng tuổi ANF 6 Free Organic vị Cá Hồi  giúp cho cơ thể thú cưng
               của bạn luôn đảm bảo sức khỏe, an toàn trong sử dụng lâu dài.'
              label='ANF'
              path='/products'
            />
         </ul>
         <ul className='cards__items'>
              <CardItem
              src='images/img--4.jpg'
              text='Classic Pets Puppy là sản phẩm thức ăn cho chó con dưới 1 tuổi. Classic Pets Puppy giúp hệ miễn dịch
               khỏe mạnh, chăm sóc da và lông bóng mượt, phát triển não. '
              label='Classic Pets'
              path='/products'
            />
            <CardItem
              src='images/img--5.jpg'
              text='Smartheart là loại thức ăn cho chó của Thái Lan, được sản xuất bởi Perfect Companion, đây là doanh 
              nghiệp đầu tiên của Thái Lan sản xuất thức ăn cho chó'
              label='Smart Heart'
              path='/products'
            />     
            <CardItem
              src='images/img--6.jpg'
              text='THỨC ĂN CHO CHÓ FIBS. Sản phẩm hạt khô cho chó Fibs có thành phần chính là bột thịt gia cầm, bột bắp,
               bột mì, các vitamin và khoáng, chất chống oxi hóa'
              label='Fibs'
              path='/products'
            />
         </ul>
         <h1 >CAT FOOD</h1> 
         <ul className='cards__items'>
              <CardItem
              src='images/img--7.jpg'
              text='Thức ăn cho mèo con OFresh là thức ăn hỗn hợp cho mèo dưới 12 tháng tuổi. Sản phẩm giàu dinh dưỡng,
               giúp thúc đẩy sự phát triển toàn diện cho mèo con.'
              label='OFresh'
              path='/products'
            />
            <CardItem
              src='images/img--8.jpg'
              text='Dành cho mèo con từ 4 - 12 tháng tuổi. Thức ăn cho mèo con ROYAL CANIN Kitten thúc đẩy sự cân bằng hệ
               vi sinh đường ruột, hỗ trợ sự phát triển khỏe mạnh '
              label='ROYAL CANIN Kitten'
              path='/products'
            />     
            <CardItem
              src='images/img--9.jpg'
              text='Thức ăn cho mèo Nutri Source được chế tạo đặc biệt cho những con mèo trưởng thành nặng hơn. 
              được các chuyên gia nghiên cứu để dành riêng cải thiện sức khỏe thú cưng.'
              label='Nutri Source'
              path='/products'
            />
         </ul>
         <ul className='cards__items'>
              <CardItem
              src='images/img--10.jpg'
              text=' Loại bỏ lông vón cục : Hỗ trợ loại bỏ lông vón cục nhờ thành phần chất xơ tự nhiên và bột củ cải đường.
              Cải thiện thị lực, cho đôi mắt khỏe mạnh nhu trau'
              label='Home Cat'
              path='/products'
            />
            <CardItem
              src='images/img--11.jpg'
              text=' Sản phẩm đồ ăn cho mèo Cat Eye là dòng thức ăn dạng hạt khô. Phù hợp với tất cả các độ tuổi của mèo: mèo nhỏ, 
              mèo trung bình, mèo trưởng thành '
              label='Cat Eye'
              path='/products'
            />     
            <CardItem
              src='images/img--12.jpg'
              text='Thành phần thức ăn chó mèo Iskhan sử dụng chứa phần lớn là cá hồi tươi với nguồn dinh dưỡng tuyệt vời, đầy đủ các loại vitamin,
               khoáng chất cần thiết'
              label='Iskhan'
              path='/products'
            />
         </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
