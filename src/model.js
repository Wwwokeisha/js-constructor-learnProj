import  image from './assets/image.png'
import {TextBlock, ColumnsBlock, TitleBlock, ImageBlock} from "./classes/blocks";

const text = 'Тут должно быть что-то интересное...'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        }
    }),
    new ColumnsBlock( [
        'Приложение на чистом JS, без использования библиотек',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
        'Узнаешь как работают принципы SOLID и ООП в JS за один курс',

    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e8)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    } ),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
            'text-align': 'center'
        }
    }),
]