import React from 'react'
import {ReactComponent as CompanyIcon} from '../images/icon-company.svg';
import {ReactComponent as LocationIcon} from '../images/icon-location.svg';
import {ReactComponent as WebsiteIcon} from '../images/icon-website.svg';
import {ReactComponent as TwitterIcon} from '../images/icon-twitter.svg';
import dayjs from 'dayjs';

export default function SearchResult({data}) {
    const {name, login, avatar_url, created_at, bio, public_repos, followers, following, location, blog, company, twitter_username} = data;

    return (
        <article className="card container">
            <header className="card__header">
                <img className="card__img" alt="user" src={avatar_url}></img>
                <h1 className="card__username">{name ? name : login}</h1>
                <h3 className="card__handle">@{login}</h3>
                <p className="card__date">Joined {dayjs(created_at).format('D MMM YYYY')}</p>
                <p className="card__text">{bio ? bio : 'This profile has no bio'}</p>
            </header>
            <div className="card__body">
                <ul className="card__list card__list--stats">
                    <li className="card__listitem card__listitem--stats">
                        <h4>Repos</h4>
                        <h2>{public_repos}</h2>
                    </li>
                    <li className="card__listitem card__listitem--stats">
                        <h4>Followers</h4>
                        <h2>{followers}</h2>
                    </li>
                    <li className="card__listitem card__listitem--stats">
                        <h4>Following</h4>
                        <h2>{following}</h2>
                    </li>
                </ul>
            </div>
            <footer className="card__footer">
                <ul className="card__list card__list--footer">
                    <li className={location ? "card__listitem card__listitem--footer" : "card__listitem card__listitem--footer card__listitem--footer-empty"}>
                        <LocationIcon />
                        <p>{location ? location : 'Not Available'}</p>
                    </li>
                    <li className={blog ? "card__listitem card__listitem--footer card__listitem--footer-blog" : "card__listitem card__listitem--footer card__listitem--footer-blog card__listitem--footer-empty"}>
                        <WebsiteIcon />
                        {blog ? <a href={blog}>{blog}</a> : <p>Not Available</p>}
                    </li>
                    <li className={twitter_username ? "card__listitem card__listitem--footer card__listitem--footer-twitter" : "card__listitem card__listitem--footer card__listitem--footer-twitter card__listitem--footer-empty"}>
                        <TwitterIcon />
                        {twitter_username ? <a href={`https://twitter.com/${twitter_username}`}>{twitter_username}</a> : <p>Not Available</p>}
                    </li>
                    <li className={company ? "card__listitem card__listitem--footer" : "card__listitem card__listitem--footer card__listitem--footer-empty"}>
                        <CompanyIcon />
                        {company ? <a href={`https://github.com/${company.substring(1)}`}>{company}</a> : <p>Not Available</p>}
                    </li>
                </ul>
            </footer>
        </article>
    )
}
