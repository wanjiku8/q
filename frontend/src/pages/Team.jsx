import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mercy Ndungu",
      role: "Social Media Designer",
      specialization: "LGBTQ Activist",
      bio: "Mercy is a passionate LGBTQ activist with over 10 years of experience in social media and digital design for advocacy organizations.",
      image: "https://img.freepik.com/free-photo/digital-art-loving-connection_23-2151106144.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
  
    {
      id: 3,
      name: "Daisy Wanjiku",
      role: "Volunteer",
      specialization: "Front-End Developer",
      bio: "Daisy contributes her technical expertise to improve our digital presence and enhance accessibility of our online resources.",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-posing-with-parrot_23-2151403719.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4c0585, #9B87F5)',
        color: 'white',
        padding: '2rem 1.5rem',
        textAlign: 'left'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginBottom: '1.2rem',
            lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif"
          }}>Meet Our Team</h1>
          <p style={{
            fontSize: '0.98rem',
            maxWidth: '1280px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our dedicated team of experts and volunteers work tirelessly to advance LGBTQ+ rights and provide support to our community.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#1A1F2C'
          }}>Our Expert Team Members</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {teamMembers.map(member => (
              <div 
                key={member.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '300px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '2rem 1.5rem 1.5rem',
                    color: 'white'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '0.25rem'
                    }}>{member.name}</h3>
                    <p style={{
                      fontSize: '1rem',
                      opacity: 0.9
                    }}>{member.role}</p>
                  </div>
                </div>
                
                <div style={{
                  padding: '1.5rem'
                }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#f9f5ff',
                    color: '#9B87F5',
                    fontSize: '0.875rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontWeight: '500',
                    marginBottom: '1rem'
                  }}>
                    {member.specialization}
                  </div>
                  <p style={{
                    marginBottom: '1.5rem',
                    color: '#555',
                    lineHeight: '1.6'
                  }}>
                    {member.bio}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f9f5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9B87F5'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28345C14.0247 3.6097 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f9f5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9B87F5'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5923C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 6.5H17.51" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f9f5ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9B87F5'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9f5ff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#1A1F2C'
          }}>Join Our Team</h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: '1.6',
            color: '#555'
          }}>
            We're always looking for passionate individuals to join our team, whether as full-time staff, part-time consultants, or volunteers.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a href="/contact" style={{
              backgroundColor: '#9B87F5',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}>
              View Open Positions
            </a>
            <a href="/join-us" style={{
              backgroundColor: 'transparent',
              color: '#9B87F5',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid #9B87F5',
              textDecoration: 'none'
            }}>
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#1A1F2C'
          }}>Our Team Values</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              backgroundColor: '#f9f5ff',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#9B87F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1A1F2C'
              }}>Inclusion</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555'
              }}>
                We embrace diversity in all forms and ensure that everyone's voice is heard and valued.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f9f5ff',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D946EF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.34277 17C3.55399 17.3028 3.82049 17.5668 4.12903 17.7841C4.43757 18.0013 4.78152 18.168 5.14681 18.2764C5.5121 18.3848 5.89364 18.4332 6.27391 18.4192C6.65419 18.4051 7.03034 18.329 7.38611 18.1937C7.74188 18.0584 8.07144 17.8661 8.35705 17.6257C8.64266 17.3853 8.87962 17.1005 9.05742 16.7845C9.23521 16.4685 9.35068 16.1267 9.39903 15.7747C9.44738 15.4228 9.42767 15.0658 9.34077 14.72M16 14.72C15.913 15.0656 15.8933 15.4225 15.9417 15.7744C15.99 16.1262 16.1056 16.468 16.2834 16.7839C16.4611 17.0998 16.698 17.3846 16.9836 17.625C17.2692 17.8654 17.5988 18.0578 17.9546 18.193C18.3103 18.3283 18.6864 18.4044 19.0667 18.4185C19.447 18.4326 19.8284 18.3842 20.1937 18.2758C20.559 18.1674 20.9029 18.0007 21.2114 17.7835C21.5199 17.5663 21.7864 17.3023 21.9977 16.9996" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.58716 3.58691C9.0182 3.2125 9.5909 3 10.1964 3C10.8014 3 11.3738 3.2125 11.805 3.58681L12.6773 4.3353C12.8831 4.51334 13.1105 4.65324 13.3517 4.7487C13.5929 4.84416 13.8447 4.89343 14.0982 4.89431L15.0839 4.89743C15.6898 4.89743 16.2719 5.11042 16.7062 5.48743C17.1403 5.86444 17.3967 6.38408 17.4473 6.93837L17.5561 8.00673C17.5863 8.23831 17.6563 8.46317 17.7627 8.67033C17.8692 8.87749 18.0107 9.06327 18.1807 9.21945L18.9111 9.89424C19.3222 10.27 19.5649 10.7791 19.5869 11.3139C19.6089 11.8488 19.4081 12.3752 19.0331 12.7834L18.3486 13.5326C18.1881 13.7014 18.0584 13.8965 17.9645 14.1093C17.8707 14.322 17.8143 14.5493 17.7976 14.7811L17.6888 15.8498C17.6382 16.4039 17.3821 16.9236 16.9482 17.3007C16.5143 17.6777 15.9325 17.8909 15.3266 17.8913L14.3424 17.8946C14.0889 17.8955 13.8371 17.9448 13.5959 18.0402C13.3547 18.1357 13.1272 18.2756 12.9214 18.4536L12.0486 19.2026C11.6175 19.5767 11.0453 19.789 10.4405 19.789C9.8356 19.789 9.26345 19.5767 8.83239 19.2026L7.96069 18.4536C7.75489 18.2756 7.52742 18.1356 7.28622 18.0402C7.04502 17.9447 6.7932 17.8955 6.53972 17.8946L5.55547 17.8913C4.9496 17.8909 4.36782 17.6777 3.93394 17.3007C3.50006 16.9236 3.244 16.4039 3.19335 15.8498L3.08455 14.7811C3.06792 14.5493 3.01144 14.322 2.91762 14.1093C2.82381 13.8965 2.69408 13.7014 2.53357 13.5326L1.84907 12.7834C1.47411 12.3752 1.27332 11.8488 1.29524 11.3139C1.31717 10.7791 1.55992 10.27 1.97106 9.89424L2.70145 9.21945C2.87139 9.06321 3.01287 8.87742 3.11933 8.67026C3.22579 8.4631 3.29574 8.23826 3.32604 8.00673L3.43485 6.93837C3.48546 6.38408 3.74152 5.86444 4.17565 5.48743C4.60978 5.11042 5.19164 4.89743 5.79751 4.89743L6.78315 4.89431C7.03663 4.89343 7.28845 4.84414 7.52965 4.74867C7.77085 4.6532 7.99831 4.5133 8.20411 4.3353L9.07723 3.58691" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1A1F2C'
              }}>Compassion</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555'
              }}>
                We approach our work with empathy and understanding, recognizing the unique challenges faced by our community.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f9f5ff',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#F97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.9104 4.16968 9.91153 4.45962 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1A1F2C'
              }}>Dedication</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555'
              }}>
                We are committed to creating lasting change through consistent, purposeful action and unwavering focus.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f9f5ff',
              borderRadius: '1rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#0EA5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 14.2222L9.42857 12L7 15.1111L4 11.1111L2 13.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 12C22 13.1819 21.7672 14.3522 21.3149 15.4442C20.8626 16.5361 20.1997 17.5282 19.364 18.364C18.5282 19.1997 17.5361 19.8626 16.4442 20.3149C15.3522 20.7672 14.1819 21 13 21C11.8181 21 10.6478 20.7672 9.55585 20.3149C8.46392 19.8626 7.4718 19.1997 6.63604 18.364C5.80028 17.5282 5.13738 16.5361 4.68508 15.4442C4.23279 14.3522 4 13.1819 4 12C4 9.61305 4.94821 7.32387 6.63604 5.63604C8.32387 3.94821 10.6131 3 13 3C15.3869 3 17.6761 3.94821 19.364 5.63604C21.0518 7.32387 22 9.61305 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1A1F2C'
              }}>Innovation</h3>
              <p style={{
                lineHeight: '1.6',
                color: '#555'
              }}>
                We continuously seek creative approaches to advocacy and community support, adapting to evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;