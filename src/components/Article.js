function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // Display a cup of coffe for every 5/10 minutes (rounded to the nearest 5/10) needed to read the article
    const nearest = minutes < 30 ? 5 : 10;
    const valueWithDecimal = minutes / nearest;
    const cupsOfCoffe = Math.ceil(valueWithDecimal) * nearest / nearest;
    let minutesRead = ` ${minutes} read`;
    for (let i=0; i < cupsOfCoffe; i++) {
        minutesRead = "☕️" + minutesRead;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutesRead}</p>
        </article>
    );
  }
  
  export default Article;
