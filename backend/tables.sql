--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: conspect; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.conspect (
    id integer NOT NULL,
    content bytea,
    course_id integer,
    user_id integer,
    path character varying(512)
);


ALTER TABLE public.conspect OWNER TO admin;

--
-- Name: conspect_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.conspect_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conspect_id_seq OWNER TO admin;

--
-- Name: conspect_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.conspect_id_seq OWNED BY public.conspect.id;


--
-- Name: course; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course (
    id integer NOT NULL,
    name character varying(512) NOT NULL
);


ALTER TABLE public.course OWNER TO admin;

--
-- Name: course_course_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.course_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_course_id_seq OWNER TO admin;

--
-- Name: course_course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.course_course_id_seq OWNED BY public.course.id;


--
-- Name: literture; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.literture (
    id integer NOT NULL,
    content bytea,
    course_id integer,
    path character varying(512)
);


ALTER TABLE public.literture OWNER TO admin;

--
-- Name: literture_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.literture_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.literture_id_seq OWNER TO admin;

--
-- Name: literture_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.literture_id_seq OWNED BY public.literture.id;


--
-- Name: user_course; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.user_course (
    user_id integer NOT NULL,
    course_id integer NOT NULL
);


ALTER TABLE public.user_course OWNER TO admin;

--
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(512) NOT NULL,
    last_name character varying(512) NOT NULL,
    username character varying(512) NOT NULL,
    email character varying(512) NOT NULL,
    password character varying(512) NOT NULL
);


ALTER TABLE public.users OWNER TO admin;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO admin;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: conspect id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.conspect ALTER COLUMN id SET DEFAULT nextval('public.conspect_id_seq'::regclass);


--
-- Name: course id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_course_id_seq'::regclass);


--
-- Name: literture id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.literture ALTER COLUMN id SET DEFAULT nextval('public.literture_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: conspect; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.conspect (id, content, course_id, user_id, path) FROM stdin;
\.


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.course (id, name) FROM stdin;
1	test course
\.


--
-- Data for Name: literture; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.literture (id, content, course_id, path) FROM stdin;
\.


--
-- Data for Name: user_course; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.user_course (user_id, course_id) FROM stdin;
1	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.users (id, first_name, last_name, username, email, password) FROM stdin;
1	test	test	test	test	test
3	test1	test1	test2	test2	test2
4	test2	test3	test3	test3	test3
\.


--
-- Name: conspect_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.conspect_id_seq', 1, false);


--
-- Name: course_course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.course_course_id_seq', 1, true);


--
-- Name: literture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.literture_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: conspect conspect_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.conspect
    ADD CONSTRAINT conspect_pkey PRIMARY KEY (id);


--
-- Name: course course_course_name_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_course_name_key UNIQUE (name);


--
-- Name: course course_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (id);


--
-- Name: literture literture_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.literture
    ADD CONSTRAINT literture_pkey PRIMARY KEY (id);


--
-- Name: user_course user_course_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.user_course
    ADD CONSTRAINT user_course_pkey PRIMARY KEY (user_id, course_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: user_course fk_course; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.user_course
    ADD CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES public.course(id);


--
-- Name: literture fk_course; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.literture
    ADD CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES public.course(id) ON DELETE CASCADE;


--
-- Name: conspect fk_course; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.conspect
    ADD CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES public.course(id) ON DELETE CASCADE;


--
-- Name: user_course fk_user; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.user_course
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: conspect fk_user; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.conspect
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

