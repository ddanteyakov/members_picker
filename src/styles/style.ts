export const style = document.createElement('style');
style.innerHTML = `
.member-list .member {
    padding: 2px;
    margin: 2px 0 2px 0;
    display: flex;
    align-items: center;
  }
  
  .member-list:first-child {
    background-color: green;
  }
  
  .member-list .member .full-name {
    flex-grow: 1;
  }

  .member-list {
    overflow: auto;
    max-height: 500px;
  }
  
  aside span {
    display: block;
  }
  
  .lists {
    width: 800px;
  }

  .lists {
    display: flex;
    align-items: center;
  }
  
  .missed-classes {
    width: 130px;
    margin-left: 3px;
    margin-right: 3px;
    padding-left: 2px;
    padding-right: 2px;
    background-color: darksalmon;
  }

  .asserted-tick {
    color: green;
    font-weight: bold;
  }

  .not-asserted-tick {
    font-style: italic;
  }
  
  .first-time {
    width: 62px;
    margin-left: 3px;
    margin-right: 3px;
    padding-left: 2px;
    padding-right: 2px;
    background-color: aquamarine;
  }
  
  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  .add-member {
    position: sticky;
    bottom: 0;
  }

  .fialta-chose-header {
    position: sticky;
    top: 0;
  }
  `;

document.head.append(style);