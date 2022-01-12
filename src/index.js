import './style.css';

const todos = [
  {
    description: 'Wash the dishes at Grandmas house',
    completed: true,
    index: '1',
  },
  {
    description: 'Watch Netflix for 2 hours',
    completed: false,
    index: '2',
  },
  {
    description: 'Code the Todo-app with Javascript',
    completed: true,
    index: '3',
  },
  {
    description: 'Wash the dishes at my house',
    completed: true,
    index: '4',
  },
];

const showToDo = (todo) => `<li class="item">
                    <input class="check" type="checkbox" value="index"/>
                    ${todo.description}
                    <span>
                       <i class="fa fa-ellipsis-v"></i>
                    </span>
                </li><hr/>`;

const todoComponent = () => {
  let string = '';
  todos.forEach((item) => {
    string += showToDo(item);
  });
  return string;
};

const cardComponent = () => `<section class="card">
        <div>
            <div class="card-title">
                <h2> Today's To Do <span> <i class="fa fa-retweet"></i> </span>
                </h2>
            </div><hr/>
            <div class="form-div">
                <form>
                    <input class="form-control" type="text" placeholder="Add to your list"/>
                </form>
            </div><hr/>
            <ul class="todos">
                ${todoComponent()}
            </ul>
            <div class="card-footer">
                <a href="#"> Clear all completed </a>
            </div>
        </div>
    </section>`;

const main = document.querySelector('main');
main.innerHTML = cardComponent();
