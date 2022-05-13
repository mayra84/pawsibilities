--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

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
-- Name: Dogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Dogs" (
    id integer NOT NULL,
    name character varying(255),
    breed character varying(255),
    weight integer,
    size character varying(255),
    age integer,
    temperament character varying(255),
    coat character varying(255),
    bio character varying(255),
    "UserId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ImageId" integer
);


ALTER TABLE public."Dogs" OWNER TO postgres;

--
-- Name: Dogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Dogs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Dogs_id_seq" OWNER TO postgres;

--
-- Name: Dogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Dogs_id_seq" OWNED BY public."Dogs".id;


--
-- Name: Health; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Health" (
    id integer NOT NULL,
    mood jsonb,
    physical jsonb,
    activity jsonb,
    notes character varying(255),
    "DogId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Health" OWNER TO postgres;

--
-- Name: HealthImages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."HealthImages" (
    id integer NOT NULL,
    "ImageId" integer NOT NULL,
    "HealthId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."HealthImages" OWNER TO postgres;

--
-- Name: HealthImages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."HealthImages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."HealthImages_id_seq" OWNER TO postgres;

--
-- Name: HealthImages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."HealthImages_id_seq" OWNED BY public."HealthImages".id;


--
-- Name: Health_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Health_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Health_id_seq" OWNER TO postgres;

--
-- Name: Health_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Health_id_seq" OWNED BY public."Health".id;


--
-- Name: Images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Images" (
    id integer NOT NULL,
    name character varying(255),
    location character varying(255),
    data jsonb,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Images" OWNER TO postgres;

--
-- Name: Images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Images_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Images_id_seq" OWNER TO postgres;

--
-- Name: Images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Images_id_seq" OWNED BY public."Images".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Sessions" (
    sid character varying(36) NOT NULL,
    expires timestamp with time zone,
    data text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Sessions" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    zipcode integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Dogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dogs" ALTER COLUMN id SET DEFAULT nextval('public."Dogs_id_seq"'::regclass);


--
-- Name: Health id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Health" ALTER COLUMN id SET DEFAULT nextval('public."Health_id_seq"'::regclass);


--
-- Name: HealthImages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HealthImages" ALTER COLUMN id SET DEFAULT nextval('public."HealthImages_id_seq"'::regclass);


--
-- Name: Images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Images" ALTER COLUMN id SET DEFAULT nextval('public."Images_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Dogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Dogs" (id, name, breed, weight, size, age, temperament, coat, bio, "UserId", "createdAt", "updatedAt", "ImageId") FROM stdin;
2	Emma	Lab Mix	55	medium	4	friendly	smooth	Emma is a very good girl. 	1	2022-03-05 14:31:23.125-06	2022-03-05 14:31:23.125-06	2
6	gbxdfghdsfgh	bulldog	57	large	3	unfriendly	smooth	,jhglkihgj	1	2022-03-06 17:55:37.284-06	2022-03-06 17:55:37.284-06	6
25	gbxdfghdsfgh	lab	55	medium	4	unfriendly	smooth	sdfrgs	2	2022-03-07 21:34:30.378-06	2022-03-07 21:34:30.378-06	28
26	Dalton	Husky Mix	60	small	3	unfriendly	smooth	jhgfj	2	2022-03-07 21:54:59.826-06	2022-03-07 21:54:59.826-06	30
27	pawsibilities #1	lab mix	60	small	3	unfriendly	smooth	sfghsdfg	4	2022-03-07 22:33:17.775-06	2022-03-07 22:33:17.775-06	32
1	Dalton	Husky Mix	52	medium	5	friendly	smooth	Dalton is the best doggo ever.<3	1	2022-03-04 14:37:58.311-06	2022-03-08 11:33:58.178-06	33
29	nelson	Cavalier	12	small	4	friendly	smooth	Nelson is well trained and likes to suffocate his loved ones.	5	2022-03-08 14:09:18.158-06	2022-03-08 14:09:18.158-06	35
30	sfggsr	sdfg	12	small	1	unfriendly	smooth	sdfgsdf	5	2022-03-08 14:29:28.304-06	2022-03-08 14:29:28.304-06	37
31	paw	husky	20	small	3	unfriendly	smooth	dzcfsdf	5	2022-03-08 14:39:27.218-06	2022-03-08 14:39:27.218-06	38
32	Dalton	Husky Mix	54	medium	5	friendly	smooth	Dalton is the best doggo ever.<3 	6	2022-03-08 15:03:15.724-06	2022-03-08 15:03:15.724-06	39
33	Emma	Lab Mix	58	large	4	friendly	smooth	Emma is a very good girl.<3	6	2022-03-08 15:13:38.906-06	2022-03-08 15:13:38.906-06	40
34	Cooper	Lab Mix	65	large	3	friendly	smooth	Cooper is a good boy.. most of the time.<3	6	2022-03-08 15:16:51.795-06	2022-03-08 15:16:51.795-06	41
37	emmaa	kuy	0	small	9	friendly	smooth	gjkm,h,k	2	2022-03-08 19:46:18.283-06	2022-03-08 19:46:18.283-06	44
\.


--
-- Data for Name: Health; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Health" (id, mood, physical, activity, notes, "DogId", "createdAt", "updatedAt") FROM stdin;
1	["happy", "calm"]	["limping"]	["walk"]	Dalton is getting used to walking on his paw. 	1	2022-03-04 14:57:06.88-06	2022-03-04 14:57:06.88-06
2	["happy", "energetic"]	["limping"]	["walk"]	He is limping less than yesterday.	1	2022-03-05 14:44:26.542-06	2022-03-05 14:44:26.542-06
3	["happy", "energetic"]	["none"]	["park"]	Emma had fun at the park.	2	2022-03-05 14:44:59.874-06	2022-03-05 14:44:59.874-06
4	["happy", "calm"]	["none"]	["walk"]		2	2022-03-06 14:03:03.16-06	2022-03-06 14:03:03.16-06
15	["happy", "calm"]	["limping"]	["walk"]	Slight limping.	1	2022-03-07 11:59:52.639-06	2022-03-07 11:59:52.639-06
14	["happy", "calm"]	["limping", "nausea"]	["walk", "park"]		2	2022-03-07 11:53:00.329-06	2022-03-07 11:53:00.329-06
13	["happy"]	["limping"]	["walk"]		6	2022-03-07 11:49:47.791-06	2022-03-07 11:49:47.791-06
6	["happy", "calm", "energetic"]	["nausea", "limping"]	["walk", "park"]		6	2022-03-06 17:57:24.128-06	2022-03-06 17:57:24.128-06
5	["happy"]	["limping"]	["walk"]		1	2022-03-06 17:49:55.19-06	2022-03-06 17:49:55.19-06
16	["happy"]	["limping"]	["walk", "park"]		25	2022-03-07 21:44:03.945-06	2022-03-07 21:44:03.945-06
17	["happy", "calm"]	["limping", "nausea"]	["walk", "park"]		26	2022-03-07 21:55:22.767-06	2022-03-07 21:55:22.767-06
18	["happy", "calm"]	["none"]	["walk"]	All's normal today.	29	2022-03-08 14:09:41.067-06	2022-03-08 14:09:41.067-06
19	["happy"]	["limping"]	["walk"]		30	2022-03-08 14:29:37.348-06	2022-03-08 14:29:37.348-06
20	["happy", "calm"]	["limping", "nausea"]	["park"]		31	2022-03-08 14:54:07.509-06	2022-03-08 14:54:07.509-06
21	["calm", "happy"]	["limping"]	["walk"]		32	2022-03-08 15:18:10.971-06	2022-03-08 15:18:10.971-06
22	["happy", "energetic"]	["none"]	["walk"]	It rained today, so Emma couldn't go to the park.	33	2022-03-08 15:18:45.49-06	2022-03-08 15:18:45.49-06
23	["happy", "energetic"]	["none"]	["walk"]	It rained today, so Cooper couldn't go to the park today.	34	2022-03-08 15:19:16.854-06	2022-03-08 15:19:16.854-06
24	["calm", "happy"]	["limping"]	["walk"]	Dalton's bandage was taken off and he was cleared to go on walks.	32	2022-03-02 15:18:10.971-06	2022-03-02 15:18:10.971-06
25	["happy", "energetic"]	["none"]	["walk"]	Same old, same old.	33	2022-03-02 15:18:45.49-06	2022-03-02 15:18:45.49-06
26	["happy", "energetic"]	["none"]	["walk"]	Cooper behaved well today.	34	2022-03-02 15:19:16.854-06	2022-03-02 15:19:16.854-06
27	["calm", "happy"]	["limping"]	["walk"]	Dalton was limping today, but that is to be expected.	32	2022-03-03 15:18:10.971-06	2022-03-03 15:18:10.971-06
28	["happy", "energetic"]	["none"]	["walk"]		33	2022-03-03 15:18:45.49-06	2022-03-03 15:18:45.49-06
29	["happy", "energetic"]	["none"]	["walk"]		34	2022-03-03 15:19:16.854-06	2022-03-03 15:19:16.854-06
30	["calm", "happy", "anxious"]	["limping"]	["walk"]		32	2022-03-04 15:18:10.971-06	2022-03-04 15:18:10.971-06
31	["happy", "energetic"]	["none"]	["walk"]		33	2022-03-04 15:18:45.49-06	2022-03-04 15:18:45.49-06
32	["happy", "energetic"]	["none"]	["walk"]		34	2022-03-04 15:19:16.854-06	2022-03-04 15:19:16.854-06
33	["calm", "happy", "anxious"]	["limping"]	["walk"]		32	2022-03-05 15:18:10.971-06	2022-03-05 15:18:10.971-06
34	["happy", "energetic"]	["none"]	["walk"]		33	2022-03-05 15:18:45.49-06	2022-03-05 15:18:45.49-06
35	["happy", "energetic"]	["none"]	["walk"]		34	2022-03-05 15:19:16.854-06	2022-03-05 15:19:16.854-06
36	["calm", "happy", "anxious"]	["limping"]	["walk"]		32	2022-03-06 15:18:10.971-06	2022-03-06 15:18:10.971-06
37	["happy", "energetic"]	["none"]	["walk"]		33	2022-03-06 15:18:45.49-06	2022-03-06 15:18:45.49-06
38	["happy", "energetic"]	["none"]	["walk"]		34	2022-03-06 15:19:16.854-06	2022-03-06 15:19:16.854-06
39	["calm", "happy", "anxious"]	["limping"]	["walk"]		32	2022-03-07 15:18:10.971-06	2022-03-07 15:18:10.971-06
40	["happy", "energetic"]	["none"]	["walk"]		33	2022-03-07 15:18:45.49-06	2022-03-07 15:18:45.49-06
41	["happy", "energetic"]	["none"]	["walk"]		34	2022-03-07 15:19:16.854-06	2022-03-07 15:19:16.854-06
42	["happy", "calm"]	["limping", "nausea"]	["park"]		1	2022-03-09 09:41:23.773-06	2022-03-09 09:41:23.773-06
\.


--
-- Data for Name: HealthImages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."HealthImages" (id, "ImageId", "HealthId", "createdAt", "updatedAt") FROM stdin;
1	21	13	2022-03-07 11:49:47.809-06	2022-03-07 11:49:47.809-06
2	22	14	2022-03-07 11:53:00.341-06	2022-03-07 11:53:00.341-06
3	23	15	2022-03-07 11:59:52.667-06	2022-03-07 11:59:52.667-06
4	29	16	2022-03-07 21:44:03.956-06	2022-03-07 21:44:03.956-06
5	31	17	2022-03-07 21:55:22.778-06	2022-03-07 21:55:22.778-06
6	36	18	2022-03-08 14:09:41.076-06	2022-03-08 14:09:41.076-06
\.


--
-- Data for Name: Images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Images" (id, name, location, data, "createdAt", "updatedAt") FROM stdin;
1	IMG_0096.jpg	https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_0096.jpg1646426276055	{"acl": "private", "key": "IMG_0096.jpg1646426276055", "etag": "\\"0ad823553641f94e117e99e4cf00c38e\\"", "size": 2086269, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_0096.jpg1646426276055", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "IMG_0096.jpg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-04 14:37:58.312-06	2022-03-04 14:37:58.312-06
2	IMG_1727.JPG	https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_1727.JPG1646512278472	{"acl": "private", "key": "IMG_1727.JPG1646512278472", "etag": "\\"c2fa24cbcec14197ec4afdfb4244288a-3\\"", "size": 13324169, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_1727.JPG1646512278472", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "IMG_1727.JPG", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-05 14:31:23.126-06	2022-03-05 14:31:23.126-06
3	banana_bandit_2.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/banana_bandit_2.jpeg1646605226071	{"acl": "private", "key": "banana_bandit_2.jpeg1646605226071", "etag": "\\"47565851bba0db10927ab69cc463579e\\"", "size": 133416, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/banana_bandit_2.jpeg1646605226071", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "banana_bandit_2.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 16:20:26.764-06	2022-03-06 16:20:26.764-06
4	ball.PNG	https://pawsibilities.s3.us-east-2.amazonaws.com/ball.PNG1646606578939	{"acl": "private", "key": "ball.PNG1646606578939", "etag": "\\"0e1eca7bc349cfe6f0b1918b21590070\\"", "size": 658907, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/ball.PNG1646606578939", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "ball.PNG", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 16:43:00.181-06	2022-03-06 16:43:00.181-06
5	dean winchester.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/dean%20winchester.jpeg1646606752478	{"acl": "private", "key": "dean winchester.jpeg1646606752478", "etag": "\\"d147f738e0a5c35d4e70558a4a58ff28\\"", "size": 406610, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/dean%20winchester.jpeg1646606752478", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "dean winchester.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 16:45:53.607-06	2022-03-06 16:45:53.607-06
6	Pawssible_Pawsibilities_Logo.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Pawssible_Pawsibilities_Logo.png1646610936912	{"acl": "private", "key": "Pawssible_Pawsibilities_Logo.png1646610936912", "etag": "\\"be9ec2d45e0b9cd6a137bd50282b9873\\"", "size": 21092, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Pawssible_Pawsibilities_Logo.png1646610936912", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Pawssible_Pawsibilities_Logo.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 17:55:37.285-06	2022-03-06 17:55:37.285-06
7	Anxious.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Anxious.png1646611150712	{"acl": "private", "key": "Anxious.png1646611150712", "etag": "\\"74c4792fbb541df6dbb5cc9eb989be76\\"", "size": 80731, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Anxious.png1646611150712", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Anxious.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 17:59:11.269-06	2022-03-06 17:59:11.269-06
8	Calm.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Calm.png1646611284933	{"acl": "private", "key": "Calm.png1646611284933", "etag": "\\"7d523c55adff8fbc6afbe897a93fb4bc\\"", "size": 76915, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Calm.png1646611284933", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Calm.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 18:01:25.488-06	2022-03-06 18:01:25.488-06
9	colorful_background_2.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_2.jpeg1646614541597	{"acl": "private", "key": "colorful_background_2.jpeg1646614541597", "etag": "\\"94f042682be907d20b47bf3d5ccb58ac\\"", "size": 56531, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_2.jpeg1646614541597", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background_2.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 18:55:42.097-06	2022-03-06 18:55:42.097-06
10	colorful_background_2.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_2.jpeg1646614569312	{"acl": "private", "key": "colorful_background_2.jpeg1646614569312", "etag": "\\"94f042682be907d20b47bf3d5ccb58ac\\"", "size": 56531, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_2.jpeg1646614569312", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background_2.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 18:56:09.829-06	2022-03-06 18:56:09.829-06
11	colorful_background_3.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646618444615	{"acl": "private", "key": "colorful_background_3.jpeg1646618444615", "etag": "\\"e5bf63aabb575ca2fde95d5a2b4534fc\\"", "size": 473997, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646618444615", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background_3.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 20:00:45.847-06	2022-03-06 20:00:45.847-06
12	colorful_background.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background.jpeg1646618864685	{"acl": "private", "key": "colorful_background.jpeg1646618864685", "etag": "\\"950d470bc24ad7fa6ec136a2de804c34\\"", "size": 73057, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background.jpeg1646618864685", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 20:07:45.049-06	2022-03-06 20:07:45.049-06
13	colorful_background_3.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646619045677	{"acl": "private", "key": "colorful_background_3.jpeg1646619045677", "etag": "\\"e5bf63aabb575ca2fde95d5a2b4534fc\\"", "size": 473997, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646619045677", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background_3.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 20:10:46.81-06	2022-03-06 20:10:46.81-06
14	colorful_background_3.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646619129342	{"acl": "private", "key": "colorful_background_3.jpeg1646619129342", "etag": "\\"e5bf63aabb575ca2fde95d5a2b4534fc\\"", "size": 473997, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646619129342", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background_3.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 20:12:10.013-06	2022-03-06 20:12:10.013-06
15	colorful_background_3.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646619185680	{"acl": "private", "key": "colorful_background_3.jpeg1646619185680", "etag": "\\"e5bf63aabb575ca2fde95d5a2b4534fc\\"", "size": 473997, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/colorful_background_3.jpeg1646619185680", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "colorful_background_3.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 20:13:06.828-06	2022-03-06 20:13:06.828-06
16	Dog_in_need.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646627009072	{"acl": "private", "key": "Dog_in_need.jpeg1646627009072", "etag": "\\"0c209f150a28a26ab3943e46fad23ba0\\"", "size": 244184, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646627009072", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 22:23:29.965-06	2022-03-06 22:23:29.965-06
17	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646629213607	{"acl": "private", "key": "Dog_in_need1.jpeg1646629213607", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646629213607", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 23:00:14.33-06	2022-03-06 23:00:14.33-06
18	Dog_in_need.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646629333441	{"acl": "private", "key": "Dog_in_need.jpeg1646629333441", "etag": "\\"0c209f150a28a26ab3943e46fad23ba0\\"", "size": 244184, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646629333441", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 23:02:13.875-06	2022-03-06 23:02:13.875-06
19	Dog_in_need.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646629457641	{"acl": "private", "key": "Dog_in_need.jpeg1646629457641", "etag": "\\"0c209f150a28a26ab3943e46fad23ba0\\"", "size": 244184, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646629457641", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 23:04:18.648-06	2022-03-06 23:04:18.648-06
20	Dog_in_need.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646629931894	{"acl": "private", "key": "Dog_in_need.jpeg1646629931894", "etag": "\\"0c209f150a28a26ab3943e46fad23ba0\\"", "size": 244184, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646629931894", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-06 23:12:12.493-06	2022-03-06 23:12:12.493-06
21	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646675387040	{"acl": "private", "key": "Dog_in_need1.jpeg1646675387040", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646675387040", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 11:49:47.801-06	2022-03-07 11:49:47.801-06
22	Possible_Pawsibilities_Logo_2.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Possible_Pawsibilities_Logo_2.png1646675579942	{"acl": "private", "key": "Possible_Pawsibilities_Logo_2.png1646675579942", "etag": "\\"8aaa05e3acce39e92337be4f9d5e9dbb\\"", "size": 21032, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Possible_Pawsibilities_Logo_2.png1646675579942", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Possible_Pawsibilities_Logo_2.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 11:53:00.336-06	2022-03-07 11:53:00.336-06
23	IMG_1211.HEIC	https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_1211.HEIC1646675989982	{"acl": "private", "key": "IMG_1211.HEIC1646675989982", "etag": "\\"4e3273c1046f0ef40b43d8fa924662db\\"", "size": 2578238, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_1211.HEIC1646675989982", "metadata": null, "mimetype": "image/heic", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "IMG_1211.HEIC", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 11:59:52.657-06	2022-03-07 11:59:52.657-06
24	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646690422576	{"acl": "private", "key": "Dog_in_need1.jpeg1646690422576", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646690422576", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 16:00:23.355-06	2022-03-07 16:00:23.355-06
25	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646710015655	{"acl": "private", "key": "Dog_in_need1.jpeg1646710015655", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646710015655", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 21:26:56.387-06	2022-03-07 21:26:56.387-06
26	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646710258263	{"acl": "private", "key": "Dog_in_need1.jpeg1646710258263", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646710258263", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 21:30:58.993-06	2022-03-07 21:30:58.993-06
27	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646710382892	{"acl": "private", "key": "Dog_in_need1.jpeg1646710382892", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646710382892", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 21:33:03.659-06	2022-03-07 21:33:03.659-06
28	Dog_in_need.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646710469876	{"acl": "private", "key": "Dog_in_need.jpeg1646710469876", "etag": "\\"0c209f150a28a26ab3943e46fad23ba0\\"", "size": 244184, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need.jpeg1646710469876", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 21:34:30.381-06	2022-03-07 21:34:30.381-06
29	\N	\N	\N	2022-03-07 21:44:03.952-06	2022-03-07 21:44:03.952-06
30	Dog_in_need1.jpeg	https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646711699115	{"acl": "private", "key": "Dog_in_need1.jpeg1646711699115", "etag": "\\"95f2f94dc51aeadddfad8070a27dafe7\\"", "size": 171459, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Dog_in_need1.jpeg1646711699115", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Dog_in_need1.jpeg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 21:54:59.827-06	2022-03-07 21:54:59.827-06
31	\N	\N	\N	2022-03-07 21:55:22.774-06	2022-03-07 21:55:22.774-06
32	Apathetic.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Apathetic.png1646713997219	{"acl": "private", "key": "Apathetic.png1646713997219", "etag": "\\"6a2a1d797de18ca775b2afaffb589d50\\"", "size": 80173, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Apathetic.png1646713997219", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Apathetic.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-07 22:33:17.776-06	2022-03-07 22:33:17.776-06
33	IMG_9747.JPG	https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_9747.JPG1646760836596	{"acl": "private", "key": "IMG_9747.JPG1646760836596", "etag": "\\"d7ad05fd32d427727ef3174f750cef42\\"", "size": 938662, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_9747.JPG1646760836596", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "IMG_9747.JPG", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 11:33:58.166-06	2022-03-08 11:33:58.166-06
34	Calm.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Calm.png1646766698641	{"acl": "private", "key": "Calm.png1646766698641", "etag": "\\"7d523c55adff8fbc6afbe897a93fb4bc\\"", "size": 76915, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Calm.png1646766698641", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Calm.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 13:11:39.176-06	2022-03-08 13:11:39.176-06
35	Loss_of_Appetite.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Loss_of_Appetite.png1646770157672	{"acl": "private", "key": "Loss_of_Appetite.png1646770157672", "etag": "\\"5e793128f5f707f5bc930246d15c3fbb\\"", "size": 50474, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Loss_of_Appetite.png1646770157672", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Loss_of_Appetite.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 14:09:18.159-06	2022-03-08 14:09:18.159-06
36	\N	\N	\N	2022-03-08 14:09:41.073-06	2022-03-08 14:09:41.073-06
37	Apathetic.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Apathetic.png1646771367842	{"acl": "private", "key": "Apathetic.png1646771367842", "etag": "\\"6a2a1d797de18ca775b2afaffb589d50\\"", "size": 80173, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Apathetic.png1646771367842", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Apathetic.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 14:29:28.306-06	2022-03-08 14:29:28.306-06
38	20220120_155817.HEIC	https://pawsibilities.s3.us-east-2.amazonaws.com/20220120_155817.HEIC1646771966378	{"acl": "private", "key": "20220120_155817.HEIC1646771966378", "etag": "\\"27fafee0d130b237aa6c7a5083ea9aca\\"", "size": 236055, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/20220120_155817.HEIC1646771966378", "metadata": null, "mimetype": "image/heic", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "20220120_155817.HEIC", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 14:39:27.219-06	2022-03-08 14:39:27.219-06
39	IMG_0096.jpg	https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_0096.jpg1646773393454	{"acl": "private", "key": "IMG_0096.jpg1646773393454", "etag": "\\"0ad823553641f94e117e99e4cf00c38e\\"", "size": 2086269, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_0096.jpg1646773393454", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "IMG_0096.jpg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 15:03:15.724-06	2022-03-08 15:03:15.724-06
40	emma.jpg	https://pawsibilities.s3.us-east-2.amazonaws.com/emma.jpg1646774015965	{"acl": "private", "key": "emma.jpg1646774015965", "etag": "\\"5bf43c6dfe2c7e361bd9d8b37194b77a\\"", "size": 3961660, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/emma.jpg1646774015965", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "emma.jpg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 15:13:38.908-06	2022-03-08 15:13:38.908-06
41	IMG_1776.JPG	https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_1776.JPG1646774206121	{"acl": "private", "key": "IMG_1776.JPG1646774206121", "etag": "\\"7f7b5ab937f9b10f71a6f016b2705fc8-2\\"", "size": 6836879, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/IMG_1776.JPG1646774206121", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "IMG_1776.JPG", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 15:16:51.796-06	2022-03-08 15:16:51.796-06
42	Anxious.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Anxious.png1646775788954	{"acl": "private", "key": "Anxious.png1646775788954", "etag": "\\"74c4792fbb541df6dbb5cc9eb989be76\\"", "size": 80731, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Anxious.png1646775788954", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Anxious.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 15:43:09.462-06	2022-03-08 15:43:09.462-06
43	Loss_of_Appetite.png	https://pawsibilities.s3.us-east-2.amazonaws.com/Loss_of_Appetite.png1646776546451	{"acl": "private", "key": "Loss_of_Appetite.png1646776546451", "etag": "\\"5e793128f5f707f5bc930246d15c3fbb\\"", "size": 50474, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/Loss_of_Appetite.png1646776546451", "metadata": null, "mimetype": "image/png", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "Loss_of_Appetite.png", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 15:55:46.737-06	2022-03-08 15:55:46.737-06
44	emma.jpg	https://pawsibilities.s3.us-east-2.amazonaws.com/emma.jpg1646790375075	{"acl": "private", "key": "emma.jpg1646790375075", "etag": "\\"5bf43c6dfe2c7e361bd9d8b37194b77a\\"", "size": 3961660, "bucket": "pawsibilities", "encoding": "7bit", "location": "https://pawsibilities.s3.us-east-2.amazonaws.com/emma.jpg1646790375075", "metadata": null, "mimetype": "image/jpeg", "fieldname": "image", "contentType": "application/octet-stream", "originalname": "emma.jpg", "storageClass": "STANDARD", "contentEncoding": null, "contentDisposition": null, "serverSideEncryption": null}	2022-03-08 19:46:18.287-06	2022-03-08 19:46:18.287-06
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20220223210607-create-user.js
20220223211130-create-dog.js
20220223211421-create-health.js
20220303191456-create-image.js
\.


--
-- Data for Name: Sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Sessions" (sid, expires, data, "createdAt", "updatedAt") FROM stdin;
K7EZuJK72gv-sG5FFHwiJL1gleeLtvwq	2022-03-09 21:51:46.568-06	{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":2,"email":"hello@o.com","password":"$2b$10$liNHpCncgwrbCJoRr2hGfOf9buuZsykWsEKSrwVwpiV7wKPX7upKq","zipcode":77583,"createdAt":"2022-03-07T04:19:28.465Z","updatedAt":"2022-03-07T04:19:28.465Z"}}	2022-03-08 14:07:56.043-06	2022-03-08 21:51:46.568-06
KkRZhQD-zetO0nKOMPrPVlBHyS_SK1M4	2022-03-10 09:41:43.743-06	{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"id":1,"email":"hello@e.com","password":"$2b$10$qdgAoWV/UlvrMby6OslPsOg50kzArMz3B1KM/Yhsu/X0G8.1M7hcq","zipcode":77583,"createdAt":"2022-03-04T20:22:16.560Z","updatedAt":"2022-03-04T20:22:16.560Z"}}	2022-03-04 14:22:22.212-06	2022-03-09 09:41:43.744-06
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, email, password, zipcode, "createdAt", "updatedAt") FROM stdin;
1	hello@e.com	$2b$10$qdgAoWV/UlvrMby6OslPsOg50kzArMz3B1KM/Yhsu/X0G8.1M7hcq	77583	2022-03-04 14:22:16.56-06	2022-03-04 14:22:16.56-06
2	hello@o.com	$2b$10$liNHpCncgwrbCJoRr2hGfOf9buuZsykWsEKSrwVwpiV7wKPX7upKq	77583	2022-03-06 22:19:28.465-06	2022-03-06 22:19:28.465-06
3	hello@n.com	$2b$10$OFOpi1sPkN9QUg9jHqF21.swallTRDsG2LszyAQPpMs96DGXk6EMa	78577	2022-03-07 15:59:24.2-06	2022-03-07 15:59:24.2-06
4	hello@a.com	$2b$10$Zxs14Mns0LquJTvOySedXua9osL3bwLR9BaK1PLF2TWiAp2rAr.ye	77583	2022-03-07 22:32:30.377-06	2022-03-07 22:32:30.377-06
5	lachlan@hey.com	$2b$10$Xw3VJPlg7LhJZ9iZ3cPsrOe0MDzD3fPsJFTdX0xmcNQh52ih8VlXS	30067	2022-03-08 14:07:42.722-06	2022-03-08 14:07:42.722-06
6	mayraestrella08@gmail.com	$2b$10$NGN/lnKOyZBXFffK7ZXcQeHYdpZGqn9BmcFExiCczdbCmIvkRHKP.	77583	2022-03-08 15:00:07.893-06	2022-03-08 15:00:07.893-06
7	hello@z.com	$2b$10$Esy0022D42aYKxCYtHGT/.AYSXVkBNzQouXk.lg6FGithyZt7qKbS	78577	2022-03-08 18:13:47.786-06	2022-03-08 18:13:47.786-06
\.


--
-- Name: Dogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Dogs_id_seq"', 37, true);


--
-- Name: HealthImages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."HealthImages_id_seq"', 6, true);


--
-- Name: Health_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Health_id_seq"', 42, true);


--
-- Name: Images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Images_id_seq"', 44, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 7, true);


--
-- Name: Dogs Dogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dogs"
    ADD CONSTRAINT "Dogs_pkey" PRIMARY KEY (id);


--
-- Name: HealthImages HealthImages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HealthImages"
    ADD CONSTRAINT "HealthImages_pkey" PRIMARY KEY (id);


--
-- Name: Health Health_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Health"
    ADD CONSTRAINT "Health_pkey" PRIMARY KEY (id);


--
-- Name: Images Images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Images"
    ADD CONSTRAINT "Images_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Sessions Sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Sessions"
    ADD CONSTRAINT "Sessions_pkey" PRIMARY KEY (sid);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Dogs Dogs_ImageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dogs"
    ADD CONSTRAINT "Dogs_ImageId_fkey" FOREIGN KEY ("ImageId") REFERENCES public."Images"(id);


--
-- Name: Dogs Dogs_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Dogs"
    ADD CONSTRAINT "Dogs_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id);


--
-- Name: HealthImages HealthImages_HealthId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HealthImages"
    ADD CONSTRAINT "HealthImages_HealthId_fkey" FOREIGN KEY ("HealthId") REFERENCES public."Health"(id);


--
-- Name: HealthImages HealthImages_ImageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HealthImages"
    ADD CONSTRAINT "HealthImages_ImageId_fkey" FOREIGN KEY ("ImageId") REFERENCES public."Images"(id);


--
-- Name: Health Health_DogId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Health"
    ADD CONSTRAINT "Health_DogId_fkey" FOREIGN KEY ("DogId") REFERENCES public."Dogs"(id);


--
-- PostgreSQL database dump complete
--

